import React, { Component } from 'react'

class ListItems extends Component {
    state = {
        items: []
    }

    render() {
        return (
            this.state.items.map(item => {
                <h1>{item}</h1>
            })
        )
    }
}
 
export default ListItems