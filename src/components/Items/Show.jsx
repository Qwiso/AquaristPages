import React, { Component } from 'react'

class Show extends Component {
    render() {
        let { item } = this.props
        return (
            <div className='col-md-2 border rounded'>
                <img src={item.image} height={180} />
                <h5>{item.category}</h5>
                <h5>{item.title}</h5>
                <h5>{item.description}</h5>
                <h5>{item.price}</h5>
            </div>
        )
    }
}
 
export default Show
