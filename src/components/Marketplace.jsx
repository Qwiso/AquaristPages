import React, { Component } from 'react'
import withAuthorization from '../withAuthorization'

class Marketplace extends Component {
    render() {
        return (
            <div>
                <div className='d-flex'>
                    marketplace
                </div>
            </div>
        )
    }
}

const authCondition = (authUser) => !!authUser
export default withAuthorization(authCondition)(Marketplace)
