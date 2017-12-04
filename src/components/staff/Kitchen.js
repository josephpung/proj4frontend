import React, { Component } from 'react'

const restoTableOrders = [
  {
    _id: 1,
    restaurantid: 1,
    dishes: [1, 2, 3, 4, 5],
    table_number: 8,
    status: 'Done'
  },
  {
    _id: 2,
    restaurantid: 1,
    dishes: [1],
    table_number: 4,
    status: ''
  },
  {
    _id: 3,
    restaurantid: 1,
    dishes: [3],
    table_number: 6,
    status: ''
  }
]

class Kitchen extends Component {
  constructor (props) {
    super()

    this.state = {
      allRestoTables: restoTableOrders
    }
  }

  render () {
    const allRestoTables = this.state.allRestoTables.map(post => {
      return (
          <div className="col s12 m4">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Table #: { post.table_number }</span>
                <p>List of Order: { post.dishes }</p>
                <p>Status: { post.status }</p>
              </div>
            </div>
          </div>
        )
      })
      return (
          <div>
            <h1>Kitchen View</h1>
              <div className="row">
                { allRestoTables }
              </div>
          </div>
        )
      }
    }


export default Kitchen
