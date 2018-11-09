import React, { Component } from 'react'
import AuthUserContext from '../../AuthUserContext';

class Loading extends Component {
  state = {  }
  render() { 
    return (
      <div className='position-fixed h-100 w-100 text-white' style={{backgroundColor: 'rgba(0,0,0,0.5)', top: 0, left: 0}}>
        <div className='d-flex justify-content-center' style={{marginTop: '25%'}}>
          <i className='fas fa-4x fa-spinner fa-pulse'></i>
        </div>
      </div>
    )
  }
}
 
export default Loading