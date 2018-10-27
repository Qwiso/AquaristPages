import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import Navigation from './components/UI/Navigation'
import withAuthentication from './withAuthentication'

import Profile from './components/User/Profile'
import Login from './components/Login'
import Marketplace from './components/Marketplace'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
}
firebase.initializeApp(firebaseConfig)

const Logout = () => {
  firebase.auth().signOut()
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
    firebase.auth().onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null })
    })

    firebase.database().ref('items').on('child_added', (data) => {
      // let uid = data.node_.children_.root_.key
      let item = data.val()
      console.log( item )
    })
  }

  componentDidUpdate() {
    if (this.state.authUser) {
      firebase.database().ref('items').orderByChild('uid').equalTo(firebase.auth().currentUser.uid).on('child_added', (snapshot) => {
        console.log(snapshot.key)
      })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className='ontainer-fluid m-0'>
          <Navigation authUser={this.state.authUser} />

          <div className='p-3'>
            <Route exact path="/" component={Marketplace} />
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
