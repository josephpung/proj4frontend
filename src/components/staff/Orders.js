import React, { Component } from 'react'
import Menu from '../customer/Menu'
import Order from '../customer/Order'


class Orders extends Component {
  render () {
    return (
      // <h1>View Orders Staff</h1>

    <div className="row">
      <div className="col s5">
          <Order />
      </div>

      <div className="col s7">
          <Menu />
      </div>
    </div>
    )
  }
}

export default Orders
