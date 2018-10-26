import React, { Component } from 'react'
import withAuthorization from '../../withAuthorization'

class Profile extends Component {
    state = { }

    render() {
        console.log(this.props)
        return (
            <h3>{this.props.user.displayName}</h3>
        )
    }
}

const authCondition = (authUser) => !!authUser
export default withAuthorization(authCondition)(Profile)
