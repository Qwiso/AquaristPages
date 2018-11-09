import React, { Component } from 'react'
import firebase from 'firebase'
import axios from 'axios'
import withAuthorization from '../withAuthorization'
import Modal from 'react-modal'

import Loading from './UI/Loading'
import CreateMarketItem from './Items/Create'
import ListItems from './Items/List'

Modal.setAppElement('#root')
const modalStyle = {
    overlay: {
        background: 'rgba(0,0,0,0.5)'
    }
}

class Profile extends Component {
    state = {
        userItems: [],
        createItemVisible: false,
        loading: true
    }

    componentDidMount() {
        firebase.auth().currentUser.getIdToken().then((idt) => {
            axios.post('/profile/items', { idt: idt }).then((res) => {
                this.setState({ userItems: res.data.items, loading: false })
            })
        })
    }

    createItemShow = () => {
        this.setState({ createItemVisible: true })
    }
    
    createItemHide = () => {
        this.setState({ createItemVisible: false })
    }

    onItemCreated = () => {
        this.setState({ createItemVisible: false })
    }

    render() {
        if (this.state.loading)
            return <Loading />

        if (!this.props.user.isAnonymous) {
            let { userItems } = this.state
            return (
                <div>
                    <button className='btn btn-info col-sm-2' onClick={this.createItemShow}>Create Item</button>

                    <hr />

                    <ListItems items={userItems} />

                    <Modal
                        style={modalStyle}
                        isOpen={this.state.createItemVisible}
                        onRequestClose={this.createItemHide}>

                        <CreateMarketItem itemCreated={this.onItemCreated} />
                    </Modal>
                </div>
            )
        }
    }
}

const authCondition = (authUser) => !!authUser
export default withAuthorization(authCondition)(Profile)
