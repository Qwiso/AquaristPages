import React, { Component } from 'react'
import withAuthorization from '../withAuthorization'

import Modal from 'react-modal'
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
        console.log(item)
        this.setState({
            createItemVisible: false
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

                        <CreateMarketItem itemCreated={this.onItemCreated} />
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
