import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Tabs, Tab, Table, Input, Button} from 'react-materialize'

const restaurantMenu = [
  {
    id: 1,
    category: 'pasta',
    name: 'LOBSTER AND CRABMEAT RAVIOLI',
    price: 18
  },
  {
    id: 2,
    category: 'pizza',
    name: 'QUATTRO FORMAGGIO',
    price: 15
  },
  {
    id: 3,
    category: 'appetizer',
    name: "DOUGH BALLS 'PIZZAEXPRESS'",
    price: 8
  },
  {
    id: 4,
    category: 'pasta',
    name: 'SPAGHETTI BOLOGNESE',
    price: 14
  },
  {
    id: 5,
    category: 'pizza',
    name: 'CALABRESE',
    price: 22
  },
  {
    id: 6,
    category: 'dessert',
    name: 'BIG BAD BROWNIE',
    price: 7
  },
  {
    id: 7,
    category: 'appetizer',
    name: 'ANTIPASTO ITALIANO',
    price: 17
  }
]

// find object selected
// push quantity into the object
// pass that

class Menu extends Component {
  constructor (props) {
    super()
    this.state = {
      submitArray : []
    }
  }

  handleOnChange = (e) => {
    const tempObj = {}
    const tempArray = [...this.state.submitArray, tempObj]
    if(e.target.value > 0 ) {
      tempObj[e.target.name] = e.target.value
      this.setState({
        submitArray: tempArray
      })
    }
    console.log(tempArray)
  }

  handleSubmit = (e) => {
        e.preventDefault()
        console.log('hello i am here');
  }

  render () {
    const appetizer = []
    const pasta = []
    const pizza = []
    const dessert = []
    const drinks = []

    const splitByCategory = restaurantMenu.map((eachMenu) => {
      if(eachMenu.category === 'appetizer')
      appetizer.push(eachMenu)
      else if(eachMenu.category === 'pasta')
      pasta.push(eachMenu)
      else if(eachMenu.category === 'pizza')
      pizza.push(eachMenu)
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
          <Input s={5} name='quantity' type='select' label='Quantity' defaultValue='0' onChange={(e) => this.handleOnChange(e)}>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
          </Input>
        </td>
      </tr>
      )
    })

    let pastaTab = pasta.map((item) => {
      return(
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          {/* onChange */}
          <Input s={5} name='quantity' type='select' label='Quantity' defaultValue='0' onChange={(e) => this.handleOnChange(e)}>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
          </Input>
        </td>
      </tr>
      )
    })

    let pizzaTab = pizza.map((item) => {
      return(
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          {/* onChange */}
          <Input s={5} name='quantity' type='select' label='Quantity' defaultValue='0' onChange={(e) => this.handleOnChange(e)}>
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
          <Input s={5} name='quantity' type='select' label='Quantity' defaultValue='0' onChange={(e) => this.handleOnChange(e)}>
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
          <Input s={5} name='quantity' type='select' label='Quantity' defaultValue='0' onChange={(e) => this.handleOnChange(e)}>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
          </Input>
        </td>
      </tr>
      )
    })

    if(appetizer.length === 0)appetizerTab = <tr><td><h3>Coming Soon!</h3></td></tr>
    if(pasta.length === 0)pastaTab = <tr><td><h3>Coming Soon!</h3></td></tr>
    if(pizza.length === 0)pizzaTab = <tr><td><h3>Coming Soon!</h3></td></tr>
    if(dessert.length === 0)dessertTab =<tr><td><h3>Coming Soon!</h3></td></tr>
    if(drinks.length === 0)drinksTab =<tr><td><h3>Coming Soon!</h3></td></tr>

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

            <Tab title='Pasta'>
              <Table>
                <thead>
                  <tr>
                    <th data-field='id'>Food Item</th>
                    <th data-field='name'>Price</th>
                    <th data-field='price'>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                    {pastaTab}
                </tbody>
              </Table>
            </Tab>

            <Tab title='Pizza'>
              <Table>
                <thead>
                  <tr>
                    <th data-field='id'>Food Item</th>
                    <th data-field='name'>Price</th>
                    <th data-field='price'>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                    {pizzaTab}
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




export default Menu
