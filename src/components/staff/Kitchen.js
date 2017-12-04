import React, { Component } from 'react'

// hard coded Kitchen order prop data



const formOutput = [
  {
    itemId: 1,
    quantity: 2,
    tableNumber: 1
  },
  {
    itemId: 2,
    quantity: 1,
    tableNumber: 2
  },
  {
    itemId: 3,
    quantity: 1,
    tableNumber: 2
  },
  {
    itemId: 1,
    quantity: 3,
    tableNumber: 2
  },
  {
    itemId: 2,
    quantity: 2,
    tableNumber: 3
  },
  {
    itemId: 3,
    quantity: 2,
    tableNumber: 3
  },
  {
    itemId: 1,
    quantity: 1,
    tableNumber: 3
  },
  {
    itemId: 2,
    quantity: 3,
    tableNumber: 1
  },
  {
    itemId: 3,
    quantity: 1,
    tableNumber: 1
  }
]

export default class Kitchen extends Component {
  constructor (props) {
    super()
  }

  render () {

    return (
      <div>
        <h1>Kitchen</h1>
      </div>
    )
  }
}


// => Show kitchen Orders from different table
// => Sort according to earliest order
// => show time from the time the order is on the screen
//
// Waiter will see the same screen as the Kitchen Staff.
//
// Kitchen staff just need to tap on food item to indicate done. & click 1 button to call for the waiter.
//
// To the right it will have food order summary,
// Shows total order,
//
// Table Number
// Order Item
// Order Quantity
// Time Counter
//
// Button: Collect Food
// Button: Food Served => On click, the order menu will disappear from the screen.
// if staff id => can access to click the button
// else cannot
// if kitchen id =>
// • can tab item to show food item is cooked
// • can click button (Serve)
