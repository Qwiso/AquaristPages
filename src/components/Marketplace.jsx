import React, { Component } from 'react'
import withAuthorization from '../withAuthorization'

import Modal from 'react-modal'

import CreateMarketItem from './Marketplace/Item/Create'

const authCondition = (authUser) => !!authUser

class Marketplace extends Component {
    state = {
        createItemVisible: true,
        modalIsOpen: false
    }

    openModal = () => {
        this.setState({modalIsOpen: true})
    }
    
    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00'
    }
    
    closeModal = () => {
        this.setState({modalIsOpen: false})
    }
    
    render() {
        return (
            <div>
                <button className='btn btn-info col-2' onClick={this.openModal}>Create Item</button>

                <div className='d-flex'>
                    <h3>banana</h3>
                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel='Example Modal'>

                    <CreateMarketItem />
                </Modal>
            </div>
        )
    }
}

export default withAuthorization(authCondition)(Marketplace)
