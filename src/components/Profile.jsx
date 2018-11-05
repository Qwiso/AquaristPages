import React, { Component } from 'react'
import withAuthorization from '../withAuthorization'

import Modal from 'react-modal'
import firebase from 'firebase'

import CreateMarketItem from './Items/Create'

Modal.setAppElement('#root')
const modalStyle = {
    content: {
        width: '60%',
        left: '20%'
    },
    overlay: {
        background: 'rgba(0,0,0,0.5)'
    }
}

class Profile extends Component {
    state = {
        createItemVisible: false
    }

    createItemShow = () => {
        this.setState({
            createItemVisible: true
        })
    }
    
    createItemHide = () => {
        this.setState({
            createItemVisible: false
        })
    }

    onItemCreated = (item) => {
        item.uid = this.props.user.uid
        let newItemKey = firebase.database().ref().child('items').push().key

        let updates = {}
        updates['/items/' + newItemKey] = item
        updates['/users/' + item.uid + '/items/' + newItemKey] = item
        firebase.database().ref().update(updates, (error) => {
            this.setState({
                createItemVisible: false
            })
        })
    }

    render() {
        if (this.props.user.uid === '3wxoK4UU8kROnyguxuiw76mRVCG3') {
            return (
                <div>
                    <button className='btn btn-info col-2' onClick={this.createItemShow}>Create Item</button>

                    <Modal
                        style={modalStyle}
                        isOpen={this.state.createItemVisible}
                        onRequestClose={this.createItemHide} >

                        {this.props.user.isAnonymous ? null : <CreateMarketItem itemCreated={this.onItemCreated} />}
                    </Modal>
                </div>
            )
        } else {
            return (
                <h3>{this.props.user.displayName}</h3>
            )
        }
    }
}

const authCondition = (authUser) => !!authUser
export default withAuthorization(authCondition)(Profile)
