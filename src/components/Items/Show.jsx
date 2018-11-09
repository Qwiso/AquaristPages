import React, { Component } from 'react'

class Show extends Component {
    render() {
        let { item } = this.props
        return (
            <div style={{width: 220}} className='m-2 border rounded text-center' data-category={item.category}>
                <p className='m-0 py-2 text-truncate'>{item.title}</p>
                <div className='position-absolute text-white bg-secondary ml-2 px-2'>
                    <small>${item.price}</small>
                </div>
                <div className='mx-auto' style={{overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 180, maxWidth: 180, minHeight: 180, maxHeight: 180}}>
                    <img src={item.image} className='img-fluid' />
                </div>
                <div className='p-2 text-truncate'>
                    {item.description} <br/>
                    <p className='page-link border-0 m-0 p-0' href='#'>read more</p>
                </div>
            </div>
        )
    }
}
 
export default Show
