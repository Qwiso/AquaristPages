import React, { Component } from 'react'
import '../css/sidebar.css'

export class Sidebar extends Component {
    state = {
        size: this.props.size || "150px",
        side: this.props.side || "left"
    }

    render() { 
        switch (this.state.side) {
            case "left":
                return (
                    <section name="leftsidebar">
                        <div style={{width: this.state.size, maxWidth: "50%", left: this.props.visible ? '0px' : '-' + this.state.size}} className={"transition-1s h-100 d-inline-block position-fixed"}>
                            {this.props.children}
                        </div>
                    </section>
                )
            case "right":
                return (
                    <section name="rightsidebar">
                        <div style={{width: this.state.size, maxWidth: "50%", right: this.props.visible ? '0px' : '-' + this.state.size}} className={"transition-1s h-100 d-inline-block position-fixed"}>
                            {this.props.children}
                        </div>
                    </section>
                )
            default:
                return null
        }
        
    }
}