import React, { Component } from 'react'
import withAuthorization from '../withAuthorization'
import axios from 'axios'

class Marketplace extends Component {
    state = {
        loading: true,
        items: []
    }

    componentDidMount() {
        axios.get('marketplace').then((res) => {
            console.log(res)
            this.setState({items: res.data.items, loading: false })
        })
    }

    render() {
        let { loading, items } = this.state

        return (
            <div>
                <div className={loading ? 'd-flex' : 'd-none'}>
                    <i className='fas fa-2x fa-spinner fa-pulse'></i>
                </div>
                
                <div className={loading ? 'd-none' : 'd-flex'}>
                    {items.map((item) => {
                        return <h3>{item.title}</h3>
                    })}
                </div>
            </div>
        )
    }
}

const authCondition = (authUser) => !!authUser
export default withAuthorization(authCondition)(Marketplace)
