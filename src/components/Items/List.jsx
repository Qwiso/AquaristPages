import React, { Component } from 'react'
import Show from './Show'

class ListItems extends Component {
    render() {
        let { items } = this.props
        
        return (
            <div className='d-flex'>
                {items.map((item, index) => {
                    return <Show key={index} item={item} />
                })}
            </div>
        )
    }
}
 
export default ListItems