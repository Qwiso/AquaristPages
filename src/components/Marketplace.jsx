import React, { Component } from 'react'
import withAuthorization from '../withAuthorization'

import Modal from 'react-modal'

import CreateMarketItem from './Marketplace/Item/Create'

Modal.setAppElement('#root')
const modalStyle = {
    content: {
        width: '66%',
        left: '17%'
    },
    overlay: {
        background: 'rgba(0,0,0,0.5)'
    }
}

const authCondition = (authUser) => !!authUser

class Marketplace extends Component {
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
    
    render() {
        return (
            <div>
                <button className='btn btn-info col-2' onClick={this.createItemShow}>Create Item</button>

                <div className='d-flex'>
                    <h3>banana</h3>
                </div>

                <Modal
                    style={modalStyle}
                    isOpen={this.state.createItemVisible}
                    onRequestClose={this.createItemHide} >

                    <CreateMarketItem />
                </Modal>
            </div>
        )
    }
}

export default withAuthorization(authCondition)(Marketplace)
