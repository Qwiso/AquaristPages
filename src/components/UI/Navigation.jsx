import React from 'react'
import { Link } from 'react-router-dom'
import withAuthorization from '../../withAuthorization'

const Navigation = () => {
  return (
    <div>
      <div className='container-fluid d-none d-md-block pb-2'>
        <div className='row bg-secondary justify-content-around'>
          <Link className='btn btn-secondary px-5' to='/'>Aquarist Pages</Link>
          <div>
            <Link className='btn btn-secondary' to='/profile'>Profile</Link>
            <Link className='btn btn-secondary' to='/marketplace'>Marketplace</Link>
          </div>
        </div>
      </div>

      <div className="container-fluid d-md-none pb-2">
        <div className="row bg-secondary justify-content-center py-2">
          <Link className='btn btn-default btn-sm border mr-4' to='/'><i className="text-white fa fa-fw fa-home"></i></Link>
          <div>
              <Link className='btn btn-default btn-sm border mr-4' to='/profile'><i className="text-white fa fa-fw fa-user"></i></Link>
              <Link className='btn btn-default btn-sm border mr-4' to='/marketplace'><i className="text-white fa fa-fw fa-dollar-sign"></i></Link>
          </div>
        </div>
      </div>
    </div>
    
  )
}
  
const authCondition = (authUser) => !!authUser
export default withAuthorization(authCondition)(Navigation)
