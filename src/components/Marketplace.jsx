import React, { Component } from 'react'
import withAuthorization from '../withAuthorization'
import MarketItemCreate from './MarketItems/MarketItemCreate';

const authCondition = (authUser) => !!authUser

class Marketplace extends Component {
    state = {  }
    
    render() {
        return (
            <div>
                marketplace
                <MarketItemCreate />
            </div>
        )
    }
}

export default withAuthorization(authCondition)(Marketplace)
