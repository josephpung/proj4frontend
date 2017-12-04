import React, { Component } from 'react'
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


class Menu extends Component {
  constructor (props) {
    super()
    this.state = {
      restaurantMenu,
      currentTab: 0,
      category: ['Appetizers', 'Mains', 'Dessert', 'Drinks' ],
      tab: {
        Appetizers: true,
        Mains: false,
        Dessert: false,
        Drinks: false
      }
    }
  }

  handleOnChange = (e) => {
    const copiedRestaurantMenu = [...this.state.restaurantMenu]
    if (e.target.value > 0) {
    const selectedMenu = copiedRestaurantMenu.find(menu => menu.id === Number(e.target.id))

    // update quantity to the object
    selectedMenu.quantity = e.target.value
    // setState for restaurantMenu
    this.setState({
      restaurantMenu: copiedRestaurantMenu
      })
    }
    console.log(this.state.restaurantMenu)
  }

  handleSubmit = (e) => {
        e.preventDefault()
        console.log('hello i am here');
  }

<<<<<<< HEAD:src/components/staff/Menu.js
  // should be placeed into Tab component like onClick
  handleTab = (tabIndex) => {
    const tempObj = {}
    this.state.category.forEach((category, index) => {
      tempObj[category] = Number(tabIndex.slice(-1)) === index ? true : false
    })

    this.setState({
      tab: tempObj
    })
  }


  render () {
    const appetizer = []
    const pasta = []
    const pizza = []
    const dessert = []
    const drinks = []

    const splitByCategory = this.state.restaurantMenu.map((eachMenu) => {
      if(eachMenu.category === 'mains')
      return mains.push(eachMenu)
      else if(eachMenu.category === 'appetizer')
      return appetizer.push(eachMenu)

    const splitByCategory = restaurantMenu.map((eachMenu) => {
      if(eachMenu.category === 'appetizer')
      appetizer.push(eachMenu)
      else if(eachMenu.category === 'pasta')
      pasta.push(eachMenu)
      else if(eachMenu.category === 'pizza')
      pizza.push(eachMenu)
      else if(eachMenu.category === 'dessert')
      return dessert.push(eachMenu)
      else if(eachMenu.category === 'drinks')
      return drinks.push(eachMenu)
      else
      return Error('Error')
    })

    let appetizerTab = appetizer.map((item, index) => {
      return(
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          <Input s={5} id={item.id.toString()} name='quantity' type='select' label='Quantity' defaultValue={item.quantity} onChange={this.handleOnChange}>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
          </Input>
        </td>
      </tr>
      )
      })

    let mainsTab = mains.map((item) => {
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
          <Input s={5} id={item.id.toString()} name='quantity' type='select' label='Quantity' defaultValue={item.quantity} onChange={this.handleOnChange}>
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
          <Input s={5} id={item.id.toString()} name='quantity' type='select' label='Quantity' defaultValue={item.quantity} onChange={this.handleOnChange}>
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
          <Input s={5} id={item.id.toString()} name='quantity' type='select' label='Quantity' defaultValue={item.quantity} onChange={this.handleOnChange}>
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
          <Tabs className='tab-demo z-depth-1' onChange={ this.handleTab } >
            <Tab title='Appetizers' active={this.state.tab.Appetizers}>
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


            <Tab title='Mains' active={this.state.tab.Mains}>
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

            <Tab title='Dessert' active={this.state.tab.Dessert}>
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
            <Tab title='Drinks' active={this.state.tab.Drinks}>
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
