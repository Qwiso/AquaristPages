import React from 'react'
import AuthUserContext from './AuthUserContext'

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        authUser: null
      }
    }

    componentDidMount() {
      console.log('ication')
      // TODO auth event
      // authUser => {
      //   authUser
      //     ? this.setState({ authUser })
      //     : this.setState({ authUser: null })
      // })
    }

    render() {
      const { authUser } = this.state
      return (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      )
    }
  }

  return WithAuthentication
}

export default withAuthentication