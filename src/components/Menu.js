import React, { Component } from 'react';
import { Row, Input, Button} from 'react-materialize'

class Menu extends Component {
  render() {
    return (
      <div>
      <h1>Menu List</h1>

      <Row>
        <Input s={6} type='select' label="Food Category" defaultValue='1'>
		      <option value='1'>Appetizers</option>
		      <option value='2'>Mains</option>
		      <option value='3'>Desserts</option>
	      </Input>
      </Row>

      <Row>
        <Input label='Food # 1' name='group1' type='checkbox' value='red'  />
        <Input s={1} type='select' label="Quantity" defaultValue='0'>
          <option value='0'>0</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </Input>
      </Row>

      <Row>
        <Input label='Food # 2' name='group1' type='checkbox' value='red'  />
        <Input s={1} type='select' label="Quantity" defaultValue='1'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </Input>
      </Row>

      <Row>
        <Input label='Food # 3' name='group1' type='checkbox' value='red'  />
        <Input s={1} type='select' label="Quantity" defaultValue='1'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </Input>
      </Row>

      <Row>
          <Button waves='light'>Send Orders</Button>
      </Row>

      </div>
    )
  }

}

export default Menu
