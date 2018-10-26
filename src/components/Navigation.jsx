import React from 'react'
import { Link } from 'react-router-dom'

import AuthUserContext from '../AuthUserContext'

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
    <ul className='list-group'>
        <li className='list-group-item'><Link to={'/'}>Home</Link></li>
        <li className='list-group-item'><Link to={'/marketplace'}>Marketplace</Link></li>
        <li className='list-group-item'><Link to={'/logout'}>Log Out</Link></li>
    </ul>

const NavigationNonAuth = () =>
    <ul className='list-group'>
        {/* <li className='list-group-item'><Link to={'/login'}>Login</Link></li> */}
    </ul>

export default Navigation