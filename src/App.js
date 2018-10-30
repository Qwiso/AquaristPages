import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import Navigation from './components/UI/Navigation'
import withAuthentication from './withAuthentication'

import Profile from './components/Profile'
import Login from './components/Login'
import Marketplace from './components/Marketplace'

const Logout = () => {
  // TODO
  return <Redirect to='/' />
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authUser: null
    }
  }

  componentDidMount() {
    // firebase.auth().onAuthStateChanged(authUser => {
    //   authUser
    //     ? this.setState({ authUser })
    //     : this.setState({ authUser: null })
    // })
  }

  render() {
    return (
      <BrowserRouter>
        <div className='ontainer-fluid m-0'>
          <Navigation authUser={this.state.authUser} />

          <div className='p-3'>
            <Route exact path="/markerplace" component={Marketplace} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default withAuthentication(App)
