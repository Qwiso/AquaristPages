import React, { Component } from 'react'

class Show extends Component {
    state = {
        item: this.props.item
    }
    
    render() {
        let { item } = this.state
        return (
            <div className='col-md-2 border rounded'>
                <div className='col'>
                    <img src={item.image} height={180} />
                </div>

                <div className='col'>
                    <h5>{item.category}</h5>
                    <h5>{item.title}</h5>
                    <h5>{item.description}</h5>
                    <h5>{item.price}</h5>
                </div>
            </div>
        )
    }
}
 
export default Show
