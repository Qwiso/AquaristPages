import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthUserContext from '../../AuthUserContext'

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : null
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <div className='d-flex flex-row justify-content-center bg-light py-2'>
    <div className='col-2'><Link to='/marketplace'>Marketplace</Link></div>
    <div className='col-2'><Link to='/profile'>Profile</Link></div>
    <div className='col-2'><Link to='/logout'>Log Out</Link></div>
  </div>

export default Navigation