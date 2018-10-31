import React from 'react'
import { Link } from 'react-router-dom'
import AuthUserContext from '../../AuthUserContext'

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth authUser={authUser} />
      : null
    }
  </AuthUserContext.Consumer>

const NavigationAuth = ({...props}) => {
  return (
    <div className='d-flex text-center justify-content-center bg-light py-2'>
      <div className='col-md-2'><Link to='/marketplace'>Marketplace</Link></div>
      <div className='col-md-2'><Link to='/profile'>Profile</Link></div>
      <div className='col-md-2'><Link to='/logout'>Log Out</Link></div>
    </div>
  )
}
  

export default Navigation