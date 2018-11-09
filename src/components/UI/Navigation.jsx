import React from 'react'
import withAuthorization from '../../withAuthorization';

const Navigation = () => {
  return (
    <div>
      <div className='container-fluid d-none d-md-block pb-2'>
        <div className='row bg-secondary justify-content-around'>
          <a href='/' className='btn btn-secondary px-5'>Aquarist Pages</a>
          <div>
            <a href='/profile' className='btn btn-secondary'>Profile</a>
            <a href='/marketplace' className='btn btn-secondary'>Marketplace</a>
          </div>
        </div>
      </div>

      <div className="container-fluid d-md-none pb-2">
        <div className="row bg-secondary justify-content-center py-2">
          <a href='/' className="btn btn-default btn-sm border mr-4"><i className="text-white fa fa-fw fa-home"></i></a>
          <div>
              <a href='/profile' className="btn btn-default btn-sm border mr-4"><i className="text-white fa fa-fw fa-user"></i></a>
              <a href='/marketplace' className="btn btn-default btn-sm border mr-4"><i className="text-white fa fa-fw fa-dollar-sign"></i></a>
          </div>
        </div>
      </div>
    </div>
    
  )
}
  
const authCondition = (authUser) => !!authUser
export default withAuthorization(authCondition)(Navigation)
