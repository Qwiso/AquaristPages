import React, { Component } from 'react'

class Show extends Component {
    render() {
        let { item } = this.props
        return (
            <div className='col-md-2 border rounded text-center' data-category={item.category}>
                <p className='m-0 p-0'>{item.title}</p>
                <div className='d-flex-row'>
                    <div className='position-absolute text-white bg-secondary px-2'>
                        <small className='m-0 p-0'>${item.price}</small>
                    </div>
                    <img src={item.image} style={{overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 180, maxWidth: 180, minHeight: 180, maxHeight: 180}} />
                </div>
                <div className='py-2 text-truncate'>
                    {item.description}
                </div>
            </div>
        )
    }
}
 
export default Show
