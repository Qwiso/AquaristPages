import React from 'react'
import { withRouter } from 'react-router-dom'
import firebase from 'firebase'
import AuthUserContext from './AuthUserContext'

const withAuthorization = (authCondition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth().onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push('/login')
        }
      })
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => authUser ? <Component {...this.props} user={authUser} /> : null}
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization)
}

export default withAuthorization