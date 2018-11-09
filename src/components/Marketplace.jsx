import React, { Component } from 'react'
import withAuthorization from '../withAuthorization'
import axios from 'axios'
import Modal from 'react-modal'

import Loading from './UI/Loading'
import ListItems from './Items/List'

Modal.setAppElement('#root')
const modalStyle = {
    overlay: {
        background: 'rgba(0,0,0,0.5)'
    }
}

const MarketplaceFilters = () => {
    return <h4>hi</h4>
}

class Marketplace extends Component {
    state = {
        marketplaceFiltersVisible: false,
        loading: true,
        items: []
    }

    componentDidMount() {
        axios.get('marketplace').then((res) => {
            this.setState({items: res.data.items, loading: false })
        })
    }

    showMarketplaceFilters = () => {
        this.setState({ marketplaceFiltersVisible: true })
    }

    marketplaceFiltersHide = () => {
        this.setState({ marketplaceFiltersVisible: false })
    }

    onItemCreated = () => {
        this.setState({ marketplaceFiltersVisible: false })
    }

    render() {
        let { loading, items } = this.state

        if (loading) {
            return (
                <Loading />
            )
        }

        return (
            <div>
                <button className='btn btn-info col-sm-2' onClick={this.showMarketplaceFilters}>Filter Items</button>

                <hr/>
                
                <ListItems items={items} />

                <Modal
                    style={modalStyle}
                    isOpen={this.state.marketplaceFiltersVisible}
                    onRequestClose={this.marketplaceFiltersHide}>

                    <MarketplaceFilters applyFilters={this.onApplyFilters} />
                </Modal>
            </div>
        )
    }
}

const authCondition = (authUser) => !!authUser
export default withAuthorization(authCondition)(Marketplace)
