import React, { Component } from 'react'
import firebase from 'firebase'
import axios from 'axios'

const resetOrientation = (srcBase64, srcOrientation, callback) => {
    let img = new Image();

    img.onload = function() {
        let width = img.width,
            height = img.height,
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext("2d")

        // set proper canvas dimensions before transform & export
        if (4 < srcOrientation && srcOrientation < 9) {
            canvas.width = height
            canvas.height = width
        } else {
            canvas.width = width
            canvas.height = height
        }

        // transform context before drawing image
        switch (srcOrientation) {
            case 2: ctx.transform(-1, 0, 0, 1, width, 0); break
            case 3: ctx.transform(-1, 0, 0, -1, width, height ); break
            case 4: ctx.transform(1, 0, 0, -1, 0, height ); break
            case 5: ctx.transform(0, 1, 1, 0, 0, 0); break
            case 6: ctx.transform(0, 1, -1, 0, height , 0); break
            case 7: ctx.transform(0, -1, -1, 0, height , width); break
            case 8: ctx.transform(0, -1, 1, 0, 0, width); break
            default: break
        }

        // draw image
        ctx.drawImage(img, 0, 0, width, height)

        // export base64
        callback(canvas.toDataURL('image/png'))
    }

    img.src = srcBase64
}

class CreateMarketItem extends Component {
    state = {
        uploading: false,
        error: false,
        success: false,
        category: '',
        title: '',
        price: 0,
        description: '',
        image: null
    }

    //#region image functions
    processImageFile = (file, input) => {
        let component = this

        this.getImageOrientation(file, function(orientation) {
            let reader = new FileReader()
            reader.onload = function (readerEvent) {
                let image = new Image()
                image.onload = function (imageEvent) {
    
                    let canvas = document.createElement('canvas'),
                        max_size = 720,
                        width = image.width,
                        height = image.height
    
                    if (width > height) {
                        if (width > max_size) {
                            height *= max_size / width
                            width = max_size
                        }
                    } else {
                        if (height > max_size) {
                            width *= max_size / height
                            height = max_size
                        }
                    }
    
                    canvas.width = width
                    canvas.height = height
                    canvas.getContext('2d').drawImage(image, 0, 0, width, height)
                    let dataUrl = canvas.toDataURL('image/png')
    
                    resetOrientation(dataUrl, orientation, function(result) {
                        document.querySelector('#form_createMarketItem img').src = result
                    })
                }
                image.src = readerEvent.target.result
                component.setState({ image: readerEvent.target.result })
            }
            reader.readAsDataURL(file)
        })
    }
    
    getImageOrientation = (file, callback) => {
        let reader = new FileReader()
    
        reader.onload = function(event) {
            let view = new DataView(event.target.result)
    
            if (view.getUint16(0, false) !== 0xFFD8) return callback(-2)
    
            var length = view.byteLength,
                offset = 2
    
            while (offset < length) {
                let marker = view.getUint16(offset, false)
                offset += 2
    
                if (marker === 0xFFE1) {
                    if (view.getUint32(offset += 2, false) !== 0x45786966) {
                        return callback(-1)
                    }
                    var little = view.getUint16(offset += 6, false) === 0x4949
                    offset += view.getUint32(offset + 4, little)
                    var tags = view.getUint16(offset, little)
                    offset += 2
    
                    for (var i = 0; i < tags; i++)
                        if (view.getUint16(offset + (i * 12), little) === 0x0112)
                            return callback(view.getUint16(offset + (i * 12) + 8, little))
                }
                else if ((marker & 0xFF00) !== 0xFF00) break
                else offset += view.getUint16(offset, false)
            }
            return callback(-1)
        }
    
        reader.readAsArrayBuffer(file.slice(0, 64 * 1024))
    }
    //#endregion
    
    //#region on changes
    itemCategoryChanged = (e) => {
        this.setState({
            category: e.target.value
        })
    }

    itemTitleChanged = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    itemPriceChanged = (e) => {
        this.setState({
            price: parseFloat(e.target.value)
        })
    }

    itemDescriptionChanged = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    itemImageChanged = (input) => {
        let file = input.target.files[0]
        if (!file) return
        if (file.type.match(/image.*/)) {
            this.processImageFile(file, input)
        }
    }
    //#endregion

    createItem = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if (!this.state.image) return null

        this.setState({ uploading: true })

        let headers = {
            'X-Mashape-Key': process.env.REACT_APP_X_MASHAPE_KEY,
            'Authorization': 'Client-ID ' + process.env.REACT_APP_IMGUR_APP_ID
        }

        axios.post('https://imgur-apiv3.p.mashape.com/3/image', this.state.image.split(',')[1], { headers: headers }).then((res) => {
            let item = {
                category: this.state.category,
                title: this.state.title,
                price: this.state.price,
                description: this.state.description,
                image: res.data.data.link,
                deletehash: res.data.data.deletehash
            }

            firebase.auth().currentUser.getIdToken().then((idt) => {
                item.user_id = firebase.auth().currentUser.uid
                let data = {
                    item: item,
                    idt: idt
                }

                axios.post('/item/create', data, (res) => {
                    this.setState({ uploading: false, success: true })
                })
            })

            this.props.itemCreated(item)
        })
    }

    render() {
        let { uploading, success, error } = this.state

        if (error) {
            return <h4>error! {error}</h4>
        }
        
        if (uploading) {
            return <h4>working...</h4>
        }

        if (success) {
            return <h4>success</h4>
        }

        return (
            <form id="form_createMarketItem">
                <div className="d-flex justify-content-center">
                    <div className="col-10 pt-3">
                        <div className="row pb-3">
                            <div className="col">
                                <select defaultValue="1" onChange={this.itemCategoryChanged} className="form-control" name="category" required>
                                    <option value="1" disabled>Choose a Category</option>
                                    <option value="flora">Flora</option>
                                    <option value="fauna">Fauna</option>
                                    <option value="hardware">Hardware</option>
                                </select>
                            </div>
                        </div>

                        <div className="row pb-3">
                            <div className="col">
                                <input onChange={this.itemTitleChanged} type="text" className="form-control" name="title" placeholder="What is the item?" required />
                            </div>
                        </div>

                        <div className="row pb-3">
                            <div className="col">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-dollar-sign" aria-hidden="true"></i></span>
                                    </div>
                                    <input onChange={this.itemPriceChanged} type="number" className="form-control" min="0.00" step="0.25" name="price" placeholder="0.00" required />
                                </div>
                            </div>
                        </div>

                        <div className="row pb-3">
                            <div className="col">
                                <textarea onChange={this.itemDescriptionChanged} rows="3" className="form-control" name="description" placeholder="Describe your item... (optional)"></textarea>
                            </div>
                        </div>

                        <div className="row pb-3">
                            <div className="col">
                                <div className="input-group d-flex flex-nowrap">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-file-image" aria-hidden="true"></i></span>
                                    </div>
                                    <input data-viewtype="create" type="file" accept="image/*" name="media_url" onChange={this.itemImageChanged} required />
                                </div>
                                <button onClick={this.createItem} className="btn btn-primary float-right">Create</button>
                                <img className="img-fluid d-block mx-auto pt-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
 
export default CreateMarketItem