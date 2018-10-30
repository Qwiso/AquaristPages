import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        
    }

    facebookLogin = () => {
        
    }

    render() { 
        return (
            <div className='d-flex justify-content-center'>
                <button className='col-6 btn btn-default btn-block text-white' style={{backgroundColor: "#3B5998"}} onClick={this.facebookLogin}>Login with <i className='fab fa-facebook'></i></button>
            </div>
        )
    }
}