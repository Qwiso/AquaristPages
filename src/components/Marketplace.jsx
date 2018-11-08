import React, { Component } from 'react'
import withAuthorization from '../withAuthorization'
import axios from 'axios'

import ListItems from './Items/List'

class Marketplace extends Component {
    state = {
        loading: true,
        items: []
    }

    componentDidMount() {
        axios.get('marketplace').then((res) => {
            this.setState({items: res.data.items, loading: false })
        })
    }

    render() {
        let { loading, items } = this.state

        if (loading) {
            return (
                <div className='d-flex'>
                    <i className='fas fa-2x fa-spinner fa-pulse'></i>
                </div>
            )
        }

        return (
            <ListItems items={items} />
        )
    }
}

const authCondition = (authUser) => !!authUser
export default withAuthorization(authCondition)(Marketplace)
