import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { Main } from './components/Main'

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
              </Switch>
            </div>
          </section>
      </BrowserRouter>
    )
  }
}

export default App
