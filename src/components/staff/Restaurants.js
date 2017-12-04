import React, { Component } from 'react'
import Tables from './Tables'

// hard coded restaurant model data
const restaurants = [
  {
    id: 1,
    name: 'Subway',
    tableQuantity: 42
  },
  {
    id: 2,
    name: 'McDonalds',
    tableQuantity: 28
  },
  {
    id: 3,
    name: 'Popeyes',
    tableQuantity: 30
  }
]

export default class Restaurants extends Component {
  constructor (props) {
    super()
    this.state = {
      allRestaurants: restaurants
    }
  }

  render () {
    const allRestaurants = restaurants.map((rest) => {
      return (
        <Tables
          id={rest.id}
          name={rest.name}
          quantity={rest.tableQuantity}
            />
      )
    })

    return (
      <div>
        <h1>Restaurants</h1>
      </div>
    )
  }
}
