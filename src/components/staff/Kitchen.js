import React, { Component } from 'react'

// hard coded Kitchen order prop data

const formOutput = [
  {
    itemId: 1,
    quantity: 1,
    tableNumber: 1
  },
  {
    itemId: 3,
    quantity: 2,
    tableNumber: 2
  }
]

export default class Kitchen extends Component {
  constructor (props) {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <h1>Kitchen</h1>
      </div>
    )
  }
}
