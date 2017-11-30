import React, { Component } from 'react'
import { Row, Input, Col, Preloader, Button } from 'react-materialize'

class Login extends Component {
  constructor (props) {
    super()
  }
  render () {
    return (
      <div>
        <h1>Login Page</h1>
        <Row className='center'>
          <Col s={12}>
            <Preloader flashing />
          </Col>
        </Row>
        <Row>
            <Input type="email" name='email' label="Email" s={12} onChange={(e) => this.handleChange(e)}/>
            <Input type="password" name='password' label="Password" s={12} onChange={(e) => this.handleChange(e)}/>
        </Row>
        <Row className="center">
            <Button className="black" waves='light'>Login</Button>
        </Row>
      </div>
    )
  }
}

export default Login
