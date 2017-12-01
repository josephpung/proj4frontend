import React, { Component } from 'react'
import { Row, Input, Col, Preloader, Button } from 'react-materialize'

import { connect } from 'react-redux'
import { login } from '../actions/userAction'


class Login extends Component {
  constructor (props) {
    super()

    this.state = {
      submitObj: null
      }
  }
  handleChange(e){
    let tempObj = {...this.state.submitObj}
    tempObj[e.target.name] = e.target.value
     this.setState({
       submitObj: tempObj
     })
  }

  loginUser(){
    this.props.dispatch(login(this.state.submitObj))
  }

  componentDidMount(){

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
          user: {this.props.user}
            <Input type="email" name='email' label="Email" s={12} onChange={(e) => this.handleChange(e)}/>
            <Input type="password" name='password' label="Password" s={12} onChange={(e) => this.handleChange(e)}/>
        </Row>
        <Row className="center">
            <Button onClick={()=>this.loginUser()}className="black" waves='light'>Login</Button>
        </Row>
      </div>
    )
  }

}

function mapStateToProps(state){
  console.log(state);
  return {
    user: state.users.user
  }
}

export default connect(mapStateToProps)(Login)
