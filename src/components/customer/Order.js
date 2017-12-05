import React, { Component } from 'react'

import Payment from '../stripe/Payment'


class Order extends Component {
  render () {
    return (
      <div>
      <h1>View Order</h1>

        <Payment />
      </div>
    )
  }
}

export default Order
