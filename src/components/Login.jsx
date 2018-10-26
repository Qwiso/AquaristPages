import React, { Component } from 'react'
import firebase from 'firebase'

export class Login extends Component {
    state = {
        db: this.db = firebase.database()
    }

    onFacebookLogin = () => {
        let provider = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signInWithPopup(provider).then(({ user, credential, additionalUserInfo }) => {
            let currentUser = firebase.auth().currentUser
            this.state.db.ref('/users/' + currentUser.uid).once('value').then((snapshot) => {
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
            <div>
                <button onClick={this.onFacebookLogin}>Login With Facebook</button>
            </div>
        )
    }
}