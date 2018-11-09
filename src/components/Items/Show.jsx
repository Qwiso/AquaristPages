import React, { Component } from 'react'

class Show extends Component {
    render() {
        let { item } = this.props
        return (
            <div style={{width: 220}} className='mx-auto mb-4 border rounded text-center bg-light' data-category={item.category}>
                <p className='m-0 py-2 text-truncate'>{item.title}</p>
                <div className='position-absolute text-white bg-secondary px-2'>
                    <small>${item.price}</small>
                </div>
                <div style={{overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 220, maxWidth: 220, minHeight: 220, maxHeight: 220}}>
                    <img src={item.image} />
                </div>
                <div className='p-2 text-truncate'>
                    {item.description} <br/>
                    <a className='border-0 m-0 p-0' href='#'>read more</a>
                </div>
            </div>
        )
    }
}
 
export default Show
