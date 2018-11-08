import React, { Component } from 'react'
import Show from './Show'

class ListItems extends Component {
    state = {
        items: this.props.items
    }

    render() {
        return (
            <div className='d-flex'>
                {this.state.items.map((item, index) => {
                    return <Show key={index} item={item} />
                })}
            </div>
        )
    }
}
 
export default ListItems