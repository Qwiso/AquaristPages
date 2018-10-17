import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { Main } from './components/Main'
import { Marketplace } from './components/Marketplace'

const checkAuth = () => {
  return true
}

const AuthRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ?
    // <Component {...props} /> :
    renderMergedProps(component, props, rest) :
    <Redirect to={{pathname: '/login'}} />
  )} />
)

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest)
  return (
    React.createElement(component, finalProps)
  )
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <section name="content">
            <div className="container-fluid p-0">
              <Switch>
                <AuthRoute exact path="/" component={Main} />
                <AuthRoute exact path="/marketplace" component={Marketplace} />
              </Switch>
            </div>
          </section>
      </BrowserRouter>
    )
  }
}

export default App
