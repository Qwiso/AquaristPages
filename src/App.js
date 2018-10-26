import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

// import { Main } from './components/Main'
import { Marketplace } from './components/Marketplace'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <section name="content">
            <div className="container-fluid p-0">
              <Switch>
                <Route exact path="/" component={Marketplace} />
              </Switch>
            </div>
          </section>
          {/* <section name="toolbar">
            <div className="container-fluid p-0 fixed-bottom" style={{height: "46px"}}>
              <div className="d-flex justify-content-around text-center">
                <div style={{cursor: "pointer"}} onClick={this.toggleLeftSidebar} onMouseEnter={this.actionButtonMouseEnter} onMouseLeave={this.actionButtonMouseLeave} className="col"><i className="fas fa-lg fa-list p-3"></i></div>
                <div style={{cursor: "pointer"}} onClick={this.toggleHelpWindow} onMouseEnter={this.actionButtonMouseEnter} onMouseLeave={this.actionButtonMouseLeave} className="col"><i className="fas fa-lg fa-question p-3"></i></div>
                <div style={{cursor: "pointer"}} onClick={this.toggleMapToolbar} onMouseEnter={this.actionButtonMouseEnter} onMouseLeave={this.actionButtonMouseLeave} className="col"><i className="fas fa-lg fa-list fa-flip-horizontal p-3"></i></div>
              </div>
            </div>
          </section> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
