import React, { Component } from 'react'
import { Row, Input} from 'react-materialize'


class Register extends Component {
  constructor (props) {
    super()
  }
  render () {
    return (
      <div>
        <h1>Registration Page</h1>
        <Row>
		        <Input s={6} label="First Name" />
        		<Input s={6} label="Last Name" /> 
        		<Input type="password" label="password" s={12} />
        		<Input type="email" label="Email" s={12} />
        </Row>
      </div>
    )
  }
}

export default Register
