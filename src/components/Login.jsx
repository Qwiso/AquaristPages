import React, { Component } from 'react'
import firebase from 'firebase'

export default class Login extends Component {
    state = {  }

    anonymousLogin = () => {
        console.log('anon')
        firebase.auth().signInAnonymously().then(() => {
            window.location.href = "/"
        }).catch(function(error) {
            // var errorCode = error.code
            // var errorMessage = error.message
        })
    }

    facebookLogin = () => {
        let provider = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signInWithPopup(provider).then(() => {
            window.location.href = "/"
        })
    }

    render() {
        return (
            <div>
                <div className='d-flex justify-content-center'>
                    <button className='col-md-6 btn btn-default btn-block text-white' style={{backgroundColor: "#3B5998"}} onClick={this.facebookLogin}>Login with <i className='fab fa-facebook'></i></button>
                </div>

                <h4 className='my-3 text-center'>or</h4>

                <div className='d-flex justify-content-center'>
                    <button className='col-md-6 btn btn-default btn-dark text-white' onClick={this.anonymousLogin}>Continue Anonymously</button>
                </div>
            </div>
        )
    }
}