import React, { Component } from 'react'
import withAuthorization from '../withAuthorization'

class Main extends Component {
  state = {  }
  render() { 
    return (
      <h3>main</h3>
    )
  }
}
 
const authCondition = (authUser) => !!authUser
export default withAuthorization(authCondition)(Main)
