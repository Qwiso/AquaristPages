import React, { Component } from 'react'
import withAuthorization from '../withAuthorization'
import CreateMarketItem from './Marketplace/Item/Create'

const authCondition = (authUser) => !!authUser

class Marketplace extends Component {
    state = {
        createItemVisible: true
    }
    
    render() {
        return (
            <div>
                marketplace
                <CreateMarketItem visible={this.state.createItemVisible} />
            </div>
        )
    }
}

export default withAuthorization(authCondition)(Marketplace)
