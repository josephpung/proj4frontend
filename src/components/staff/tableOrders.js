import React, { Component } from 'react'
import { Tabs, Tab, Table, Input, Button} from 'react-materialize'
import { connect } from 'react-redux'
import { reloadUser } from '../../actions/userAction'
import axios from 'axios'
import io from 'socket.io-client';
import { Link } from 'react-router-dom'

const socket = io('/');

const restaurantMenu = [
  {
    id: 1,
    category: 'mains',
    name: 'LOBSTER AND CRABMEAT RAVIOLI',
    price: 18
  },
  {
    id: 2,
    category: 'mains',
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
    category: 'mains',
    name: 'SPAGHETTI BOLOGNESE',
    price: 14
  },
  {
    id: 5,
    category: 'mains',
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


class Orders extends Component {
  constructor (props) {
    super()
    this.state = {
      tableNumber: "",
      restaurantMenu: [],
      tableOrders: {},
      restoId: "",
      currentTab: 0,
      category: ['Appetizers', 'Mains', 'Dessert', 'Drinks' ],
      tab: {
        Appetizers: true,
        Mains: false,
        Dessert: false,
        Drinks: false
      },
      submitObj: {}
    }
  }

  reload = (e) =>{
    this.props.refreshUser()
  }

  handleSubmit = (e) => {
        e.preventDefault()
        const { match: { params } } = this.props
        axios.post("/addtableorder", {
          id: this.state.tableNumber,
          restaurantMenu: this.state.submitObj
        })
        .then(res => console.log(res.data))
  }

  handleOnChange = (e) => {
    const copiedRestaurantMenu = [...this.state.restaurantMenu]
    if (e.target.value > 0) {
    const selectedMenu = copiedRestaurantMenu.find(menu => menu._id === e.target.id)
    // update quantity to the object
    selectedMenu.quantity = e.target.value

    let tempObj = {...this.state.submitObj}
      tempObj[e.target.name] = e.target.value
    // setState for restaurantMenu
    this.setState({
      restaurantMenu: copiedRestaurantMenu,
      submitObj: tempObj
      })

    }else if(Number(e.target.value) === 0) {
      const copiedRestaurantMenu = [...this.state.restaurantMenu]
      const selectedMenu = copiedRestaurantMenu.find(menu => menu._id === e.target.id)
        delete selectedMenu.quantity

      let tempObj = {...this.state.submitObj}

        // tempObj[e.target.name] = e.target.value
        delete tempObj[e.target.name]

      this.setState({
        restaurantMenu: copiedRestaurantMenu,
        submitObj: tempObj
      })

  }
    console.log(this.state.restaurantMenu)
  }

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

  componentWillMount(){
    function isEmpty( obj ) {
      for ( var prop in obj ) {
        return false;
      }
      return true;
    }
    console.log("mounted");
    const { match: { params } } = this.props

    this.setState({
      localSavedOrder: this.props.user.savedOrder,
      tableNumber: params.restoTableId
    })

    axios.get(`/table/${params.restoTableId}`)
    .then(result=>{

      this.setState({
        tableOrders: result.data.dishes
      })
      axios.get(`/menu/${result.data.restaurant_id}`) 
      .then(response =>{
        if(!isEmpty(this.state.tableOrders)){
          let menuList = response.data.map(menuItem =>{
            for (var key in this.state.tableOrders){
              if(key === menuItem.name){
                menuItem["quantity"] = this.state.tableOrders[menuItem.name]
                return menuItem
              }else{
                return menuItem
              }
            }
          })
            console.log(menuList);
          this.setState({
            restaurantMenu: menuList
          })
        }else{
          this.setState({
            restaurantMenu: response.data
          })
        }

      })
    })

  }
  componentDidMount(){

    socket.on("orderConfirmed", (data)=>{
      this.setState({
        testText: data.message
      })
    })
  }
  render () {
    const appetizer = []
    const mains = []
    const dessert = []
    const drinks = []

    this.state.restaurantMenu.forEach((eachMenu) => {
      if(eachMenu.category === 'mains')
      return mains.push(eachMenu)
      else if(eachMenu.category === 'appetizer')
      return appetizer.push(eachMenu)
      else if(eachMenu.category === 'dessert')
      return dessert.push(eachMenu)
      else if(eachMenu.category === 'drinks')
      return drinks.push(eachMenu)
      else
      return Error('Error')
    })

    let appetizerTab = appetizer.map((item, index) => {
      return(
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          <Input s={5} id={item._id} name={item.name} type='select' label='Quantity' defaultValue={item.quantity} onChange={this.handleOnChange}>
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
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          {/* onChange */}
          <Input s={5} id={item._id} name={item.name} type='select' label='Quantity' defaultValue={item.quantity} onChange={this.handleOnChange}>
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
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          {/* onChange */}
          <Input s={5} id={item._id} name={item.name} type='select' label='Quantity' defaultValue={item.quantity} onChange={this.handleOnChange}>
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
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          <Input s={5} id={item._id} name={item.name} type='select' label='Quantity' defaultValue={item.quantity} onChange={this.handleOnChange}>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
          </Input>
        </td>
      </tr>
      )
    })

    if(appetizer.length === 0)appetizerTab = <tr><td><h3>Coming Soon!</h3></td></tr>
    if(mains.length === 0)mainsTab = <tr><td><h3>Coming Soon!</h3></td></tr>
    if(dessert.length === 0)dessertTab =<tr><td><h3>Coming Soon!</h3></td></tr>
    if(drinks.length === 0)drinksTab =<tr><td><h3>Coming Soon!</h3></td></tr>


    // let displayOrderList = this.state.tableOrders.map(order=>{
    //   return (
    //     <div key={order.id}>{order.id}</div>
    //   )
    // })
    if (this.props.user.type ==="user"){
      return (
        <div>
        <h1 className="center">View Ordersz</h1>
        <h5>Table Number: </h5>

        <Table>
        	<thead>
        		<tr>
        			<th data-field="id">Dish Name</th>
        			<th data-field="name">Quantity</th>
        			<th data-field="price">Total Price</th>
        		</tr>
        	</thead>

        	<tbody>
        		<tr>
        			<td>Alvin</td>
        			<td>Eclair</td>
        			<td>$0.87</td>
        		</tr>
        		<tr>
        			<td>Alan</td>
        			<td>Jellybean</td>
        			<td>$3.76</td>
        		</tr>
        	</tbody>
        </Table>
        <Table>
        	<thead>
            <tr>
              <th></th>
            </tr>
        	</thead>
        	<tbody>
        		<tr>
              <td></td>
              <td className="right-align"><label>Subtotal:</label></td>
        			<td>$22.90</td>
        		</tr>
            <tr>
              <td></td>
              <td className="right-align"><label>GST & Service Charge</label></td>
        			<td>$2.90</td>
        		</tr>
            <tr>
              <td></td>
              <td className="right-align"><label>Total</label></td>
        			<td>$25.90</td>
        		</tr>
        	</tbody>
        </Table>
        <Link to={"/menu"} className="btn black">back to Menu</Link>
        <Link to={"/menu"} className="btn right black">Pay Bill beetch</Link>

        </div>
      )
    }else{
    return (
    <div className="row">
      <div className="col s5">
      <h1>View Order</h1>

      <ul className="collection">
        <li className="collection-item avatar">
          {/* {displayOrderList} */}
          {/* {this.state.localSavedOrder} */}
        </li>
      </ul>

      </div>

      <div className="col s7">
          <h1>Order Here</h1>

        <form>

          <Tabs className='tab-demo z-depth-1' onChange={ this.handleTab }>

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
                    {mainsTab}
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

            <div className="row">

              <div className="col s5">
                <Button onClick={e => this.handleSubmit(e)} waves='light'>Confirm Order</Button>
              </div>

            </div>

          </form>
          <Button onClick={e => this.reload(e)} waves='light'>Refresh User</Button>

      </div>
    </div>
    )
    }
  }
}

const mapStateToProps = (state) =>{
  console.log(state.users);
  return {
    user: state.users
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    refreshUser: () => dispatch(reloadUser())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Orders)
