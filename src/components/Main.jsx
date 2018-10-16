import React, { Component } from 'react'

export class Main extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <section name="actionBar" className="d-block">
          <div className="container-fluid p-0 fixed-bottom" style={{height: "46px"}}>
            <div className="d-flex justify-content-around text-center">
              <div style={{cursor: "pointer"}} onClick={this.toggleLeftSidebar} onMouseEnter={this.actionButtonMouseEnter} onMouseLeave={this.actionButtonMouseLeave} className="col"><i className="fas fa-lg fa-list p-3"></i></div>
              <div style={{cursor: "pointer"}} onClick={this.toggleHelpWindow} onMouseEnter={this.actionButtonMouseEnter} onMouseLeave={this.actionButtonMouseLeave} className="col"><i className="fas fa-lg fa-question p-3"></i></div>
              <div style={{cursor: "pointer"}} onClick={this.toggleMapToolbar} onMouseEnter={this.actionButtonMouseEnter} onMouseLeave={this.actionButtonMouseLeave} className="col"><i className="fas fa-lg fa-list fa-flip-horizontal p-3"></i></div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}