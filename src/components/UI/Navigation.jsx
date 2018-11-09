import React from 'react'
import withAuthorization from '../../withAuthorization';

const Navigation = () => {
  return (
    <div className='container-fluid d-none d-md-block pb-2'>
      <div className='row bg-secondary justify-content-around'>
        <a href='/' className='btn btn-secondary px-5'>Aquarist Pages</a>
        <div>
          <a href='/profile' className='btn btn-secondary'>Profile</a>
          <a href='/marketplace' className='btn btn-secondary'>Marketplace</a>
        </div>
      </div>
    </div>
  )
}
  
const authCondition = (authUser) => !!authUser
export default withAuthorization(authCondition)(Navigation)
