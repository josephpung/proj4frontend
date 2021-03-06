import React, { Component } from 'react'
import { Tabs, Tab, Table, Input, Button} from 'react-materialize'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import socket from '../../API/socketAPI'



class Orders extends Component {
  constructor (props) {
    super()
    this.state = {
      tableId: "",
      tableNumber: "",
      restaurantMenu: [],
      tableOrders: {},
      currentDishArr: [],
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


  handleSubmit = (e) => {
        e.preventDefault()

        axios.post("/staff/addtableorder", {
          id: this.state.tableId,
          restaurantMenu: this.state.submitObj
        })
        // .then(res => console.log(res.data))

        socket.emit("submitOrder")
  }

  handleOnChange = (e) => {
    const copiedRestaurantMenu = [...this.state.restaurantMenu]
    if (Number(e.target.value) > 0) {
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
       tempObj[e.target.name] = "0"

      this.setState({
        restaurantMenu: copiedRestaurantMenu,
        submitObj: tempObj
      })

  }
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
    const { match: { params } } = this.props

    this.setState({
      localSavedOrder: this.props.user.savedOrder,
      tableId: params.restoTableId
    })

    axios.get(`/display_data/table/${params.restoTableId}`)
    .then(result=>{

      this.setState({
        tableOrders: result.data.dishes,
        tableNumber: result.data.table_number
      })
      axios.get(`/display_data/menu/${result.data.restaurant_id}`)
      .then(response =>{

        if(!isEmpty(this.state.tableOrders)){
          var menuList = []
          response.data.forEach(menuItem =>{
            for (var key in this.state.tableOrders){
              if(key === menuItem.name){

                menuItem["quantity"] = this.state.tableOrders[menuItem.name]
                menuList.push(menuItem)
              }else{
                menuList.push(menuItem)
              }
            }
          })
          var unique = menuList.filter(function(elem, index, self) {
              return index === self.indexOf(elem);
          })
          this.setState({
            restaurantMenu: unique
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
      function isEmpty( obj ) {
        for ( var prop in obj ) {
          return false;
        }
        return true;
      }
      const { match: { params } } = this.props

      axios.get(`/display_data/table/${params.restoTableId}`)
      .then(result=>{

        this.setState({
          tableOrders: result.data.dishes,
          tableNumber: result.data.table_number
        })
        axios.get(`/display_data/menu/${result.data.restaurant_id}`)
        .then(response =>{

          if(!isEmpty(this.state.tableOrders)){
            var menuList = []
            response.data.forEach(menuItem =>{
              for (var key in this.state.tableOrders){
                if(key === menuItem.name){

                  menuItem["quantity"] = this.state.tableOrders[menuItem.name]
                  menuList.push(menuItem)
                }else{
                  menuList.push(menuItem)
                }
              }
            })
            var unique = menuList.filter(function(elem, index, self) {
                return index === self.indexOf(elem);
            })
            this.setState({
              restaurantMenu: unique
            })

          }else{
            this.setState({
              restaurantMenu: response.data
            })
          }

        })
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
        <td>${item.price}</td>
        <td>
          <Input s={5} id={item._id} name={item.name} type='select' label='Quantity' defaultValue={item.quantity} onChange={this.handleOnChange}>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </Input>
        </td>
      </tr>
      )
    })

    let mainsTab = mains.map((item) => {
      return(
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td>
          {/* onChange */}
          <Input s={5} id={item._id} name={item.name} type='select' label='Quantity' defaultValue={item.quantity} onChange={this.handleOnChange}>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </Input>
        </td>
      </tr>
      )
    })

    let dessertTab = dessert.map((item) => {
      return(
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td>
          {/* onChange */}
          <Input s={5} id={item._id} name={item.name} type='select' label='Quantity' defaultValue={item.quantity} onChange={this.handleOnChange}>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </Input>
        </td>
      </tr>
      )
    })

    let drinksTab = drinks.map((item) => {
      return(
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td>
          <Input s={5} id={item._id} name={item.name} type='select' label='Quantity' defaultValue={item.quantity} onChange={this.handleOnChange}>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>

          </Input>
        </td>
      </tr>
      )
    })

    if(appetizer.length === 0)appetizerTab = <tr><td><h3>Coming Soon!</h3></td></tr>
    if(mains.length === 0)mainsTab = <tr><td><h3>Coming Soon!</h3></td></tr>
    if(dessert.length === 0)dessertTab =<tr><td><h3>Coming Soon!</h3></td></tr>
    if(drinks.length === 0)drinksTab =<tr><td><h3>Coming Soon!</h3></td></tr>


    let order = this.state.restaurantMenu.map(dish=>{
      if(dish.quantity){
        return (
          <tr key={dish._id}>
            <td>{dish.name}</td>
            <td>{dish.quantity}</td>
            <td>${dish.price*dish.quantity}</td>
          </tr>
        )
      }

    })

    let totalPrice = this.state.restaurantMenu.length >0 ? this.state.restaurantMenu.map(dish=>{
        return  dish.quantity!== undefined ? dish.price*dish.quantity : 0 }).reduce((a,b)=>{ return a+b}) : 0

   if (this.props.user.type ==="user" && this.props.user.loggedIn){
      return (
        <div>
        <h1 className="center">View Ordersz</h1>

        <div className="col s5">
        <h1>Table {this.state.tableNumber}</h1>

        <ul className="collection">
          <li className="collection-item ">
            <Table>
              <thead>
                <tr>
                  <th>Dish</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {order}
              </tbody>
            </Table>
          </li>
        </ul>

        </div>
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
        			<td>${totalPrice}</td>
        		</tr>
            <tr>
              <td></td>
              <td className="right-align"><label>GST & Service Charge</label></td>
        			<td>${totalPrice*.1}</td>
        		</tr>
            <tr>
              <td></td>
              <td className="right-align"><label>Total</label></td>
        			<td>${totalPrice*1.1}</td>
        		</tr>
        	</tbody>
        </Table>
        <Link to={"/orders/"+this.state.tableId} className="btn black">back to Menu</Link>
        <Link to={"/menu"} className="btn right black">Pay Bill beetch</Link>

        </div>
      )
    }else{
    return (
    <div className="row">
      <div className="col s5">
      <h1>Table {this.state.tableNumber}</h1>

      <ul className="collection">
        <li className="collection-item ">
          <Table>
            <thead>
              <tr>
                <th>Dish</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {order}
            </tbody>
          </Table>
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

      </div>
    </div>
    )
    }



const mapStateToProps = (state) =>{
  return {
    user: state.users
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Orders)
