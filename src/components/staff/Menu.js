import React, { Component } from 'react'
import { Tabs, Tab, Table, Input, Button} from 'react-materialize'

// hard coded food item model data

const restaurantMenu = [
  {
    id: 1,
    category: 'mains',
    name: 'Cold Cut Trio',
    price: 5
  },
  {
    id: 2,
    category: 'mains',
    name: 'Subway Melts',
    price: 7
  },
  {
    id: 3,
    category: 'mains',
    name: 'Meatball Marinara',
    price: 6.50
  },
  {
    id: 4,
    category: 'appetizer',
    name: 'Double Chocolate Cookie',
    price: 1.50
  },
  {
    id: 5,
    category: 'drinks',
    name: 'Dasani Water',
    price: 1.50
  },
  {
    id: 6,
    category: 'drinks',
    name: 'Coke',
    price: 1.50
  },
  {
    id: 7,
    category: 'appetizer',
    name: 'Strawberry Brownie',
    price: 1.50
  }
]

class Menu extends Component {
  constructor (props) {
    super()
    this.state = {

    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello i am here');
  }
  render () {
    const mains = []
    const appetizer = []
    const dessert = []
    const drinks = []
    const splitByCategory = restaurantMenu.map((eachMenu) => {
      if(eachMenu.category === 'mains')
      mains.push(eachMenu)
      else if(eachMenu.category === 'appetizer')
      appetizer.push(eachMenu)
      else if(eachMenu.category === 'dessert')
      dessert.push(eachMenu)
      else if(eachMenu.category === 'drinks')
      drinks.push(eachMenu)
    })

    let appetizerTab = appetizer.map((item, index) => {
      return(
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          {/* onChange */}
          <Input s={5} type='select' label='Quantity' defaultValue='0'>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
          </Input>
        </td>
      </tr>
      )
      })
    let mainsTab = mains.map((item) => {
      return(
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          {/* onChange */}
          <Input s={5} type='select' label='Quantity' defaultValue='0'>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
          </Input>
        </td>
      </tr>
      )
    })
    let dessertTab = dessert.map((item) => {
      return(
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          {/* onChange */}
          <Input s={5} type='select' label='Quantity' defaultValue='0'>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
          </Input>
        </td>
      </tr>
      )
    })
    let drinksTab = drinks.map((item) => {
      return(
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          {/* onChange */}
          <Input s={5} type='select' label='Quantity' defaultValue='0'>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
          </Input>
        </td>
      </tr>
      )
    })

    if(appetizer.length === 0)appetizerTab = <h3>Coming Soon!</h3>
    if(mains.length === 0)mainsTab = <h3>Coming Soon!</h3>
    if(dessert.length === 0)dessertTab = <h3>Coming Soon!</h3>
    if(drinks.length === 0)drinksTab = <h3>Coming Soon!</h3>

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
                    {appetizerTab}
                </tbody>
              </Table>
            </Tab>
            <Tab title='Mains'>
              <Table>
                <thead>
                  <tr>
                    <th data-field='id'>Food Item</th>
                    <th data-field='name'>Price</th>
                    <th data-field='price'>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                    {mainsTab}
                </tbody>
              </Table>
            </Tab>
            <Tab title='Dessert'>
              <Table>
                <thead>
                  <tr>
                    <th data-field='id'>Food Item</th>
                    <th data-field='name'>Price</th>
                    <th data-field='price'>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                    {dessertTab}
                </tbody>
              </Table>
            </Tab>
            <Tab title='Drinks'>
              <Table>
                <thead>
                  <tr>
                    <th data-field='id'>Food Item</th>
                    <th data-field='name'>Price</th>
                    <th data-field='price'>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                    {drinksTab}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
          <Button onClick={e => this.handleSubmit(e)} waves='light'>Confirm Order</Button>
        </form>

      </div>
    )
  }
}


// Menu Component
// Challenge 1
// How can i filter product by their category and render them according to their category.
// Tried doing map at the bottom but it won't take if else statements
// Challenge 2
// How can i get the data value out. The ID of the food item & quantity
// Challenge 3
// On Submit, the

// Table Component
// Render each table by index

// QrCode Reader
// Redirect button not working


// filter base on category
// put those filtered into the category they belong to
//



export default Menu
