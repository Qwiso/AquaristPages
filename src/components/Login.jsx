import React, { Component } from 'react'
import firebase from 'firebase'

export default class Login extends Component {
    state = {
        db: this.db = firebase.database()
    }

    facebookLogin = () => {
        let provider = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signInWithPopup(provider).then(({ user, credential, additionalUserInfo }) => {
            let currentUser = firebase.auth().currentUser
            this.state.db.ref('users/' + currentUser.uid).once('value').then((snapshot) => {
                if (snapshot.val() === null) {
                    if (user && credential && additionalUserInfo) {
                        this.state.db.ref('users/' + currentUser.uid).set({
                            uid: currentUser.uid,
                            email: additionalUserInfo.profile.email,
                            name: currentUser.displayName,
                            image: currentUser.photoURL,
                            facebook_id: additionalUserInfo.profile.id,
                            facebook_access_token: credential.accessToken,
                            facebook_refresh_token: user.refreshToken
                        })
                    }
                }
            })
            window.location.href = "/"
        })
    }

    render() { 
        return (
            <div className='d-flex justify-content-center'>
                <button className='col-6 btn btn-default btn-block text-white' style={{backgroundColor: "#3B5998"}} onClick={this.facebookLogin}>Login with <i className='fab fa-facebook'></i></button>
            </div>
        )
    }
}