import React, { Component } from 'react'
import { Row, Input, Col, Preloader } from 'react-materialize'

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
          <Input s={12} type='select' label='Materialize Select' icon='weekend' defaultValue='2'>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
            <option value='3'>Option 3</option>
          </Input>
        </Row>
        <Row>
          <Input name='group1' type='radio' value='red' label='Red' />
          <Input name='group1' type='radio' value='yellow' label='Yellow' />
          <Input name='group1' type='radio' value='green' label='Green' className='with-gap' />
          <Input name='group1' type='radio' value='brown' label='Brown' disabled='disabled' />
        </Row>
      </div>
    )
  }
}

export default Login
