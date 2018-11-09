import React, { Component } from 'react'

class Show extends Component {

    showMarketItem = () => {

    }

    render() {
        let { item } = this.props

        return (
            <div style={{minWidth: 250, maxWidth: 250, minHeight: 305, maxHeight: 305}} className='shadow mx-auto mb-3' data-category={item.category}>
                <div className='row justify-content-end pr-3'>
                    <div className='position-absolute btn btn-secondary pt-0 pb-1 px-1'>
                        <i className='fa fa-xs fa-edit'></i>
                    </div>
                </div>
                <div className='row justify-content-start pl-3'>
                    <div className='position-absolute badge badge-secondary p-2 align-middle'>${item.price}</div>
                </div>
                <div style={{overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 250, maxWidth: 250, minHeight: 250, maxHeight: 250}}>
                    <a onClick={this.showMarketItem} style={{cursor: 'pointer'}}>
                        <img src={item.image} style={{maxHeight: 250}} />
                    </a>
                </div>
                <div className='row pb-2'>
                    <div className='col mx-2 text-truncate'>
                        <small><b>{item.title}</b></small>
                        <br />
                        <small className='text-muted'>{new Date(item.created_at).toLocaleString()}</small>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Show
