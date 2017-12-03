import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Input, Button } from 'react-materialize'

class Login extends Component {
  constructor (props) {
    super()
  }

  handleChange = (e) => {

  }
  render () {
    return (
      <div>
        <h1>Login Page</h1>
        <Row>
            <Input type="email" name='email' label="Email" s={8} onChange={(e) => this.handleChange(e)}/>
            <Input type="password" name='password' label="Password" s={8} onChange={(e) => this.handleChange(e)}/>
        </Row>
        <Row className="center">
            <Button className="black" waves='light'>Login</Button>
        </Row>

        <Row>
          <Link to="/register">

          <Button className="blue" waves="light">Sign Up</Button>
          </Link>
        </Row>

      </div>
    )
  }
}

export default Login
