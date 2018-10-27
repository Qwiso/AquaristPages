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

    onNewItem = (item) => {
        console.log(item)
    }
    
    render() {
        return (
            <div>
                <button className='btn btn-info col-2' onClick={this.createItemShow}>Create Item</button>

                <div className='d-flex'>
                    
                </div>

                <Modal
                    style={modalStyle}
                    isOpen={this.state.createItemVisible}
                    onRequestClose={this.createItemHide} >

                    <CreateMarketItem newItem={this.onNewItem} />
                </Modal>
            </div>
        )
    }
}

const authCondition = (authUser) => !!authUser
export default withAuthorization(authCondition)(Marketplace)
