import React, { Component } from 'react'
import { Tabs, Tab, Table, Input, Button} from 'react-materialize'

// hard coded food item model data

const restaurantMenu = [
  {
    id: 1,
    category: 'mains',
    name: 'Cold Cut Trio',
    Price: 5
  },
  {
    id: 2,
    category: 'mains',
    name: 'Subway Melts',
    Price: 7
  },
  {
    id: 3,
    category: 'mains',
    name: 'Meatball Marinara',
    Price: 6.50
  },
  {
    id: 4,
    category: 'appetizer',
    name: 'Double Chocolate Cookie',
    Price: 1.50
  },
  {
    id: 5,
    category: 'drinks',
    name: 'Dasani Water',
    Price: 1.50
  },
  {
    id: 6,
    category: 'drinks',
    name: 'Coke',
    Price: 1.50
  }
]

class Menu extends Component {
  constructor (props) {
    super()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello i am here');
  }
  render () {
    return (
      <div>
        <h1>Order Here</h1>
        <form>
          <Tabs className='tab-demo z-depth-1'>
            <Tab title='Appetizers' active>
              <Table>
                <thead>
                  <tr>
                    <th data-field='id'>Food Item</th>
                    <th data-field='name'>Price</th>
                    <th data-field='price'>Quantity</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Chicken Rice</td>
                    <td>$0.87</td>
                    <td>
                      <Input s={5} type='select' label='Quantity' defaultValue='0'>
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                      </Input>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab title='Mains'>Test 2</Tab>
            <Tab title='Drinks'>Test 3</Tab>
            <Tab title='Desserts'>Test 4</Tab>
          </Tabs>
          <Button onClick={e => this.handleSubmit(e)} waves='light'>Confirm Order</Button>
        </form>

      </div>
    )
  }
}

/* <ul>{restaurantMenu.map((eachItem) =>
  if(eachItem.category === 'appetizer')
  <li>{eachItem.name}
  </li>
)}
</ul> */
// hard coded form data
//
// how do we filter the products and pass the category into the right column.
// submit materialize form, and tag each item submitted
// how we do connect the

export default Menu
