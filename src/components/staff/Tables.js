import React, { Component } from 'react'
import { Row, Col, CardPanel } from 'react-materialize'

// hard coded restaurant model data
var subway = {
  id: 1,
  name: 'Subway',
  tableQuantity: 42
}

class Tables extends Component {
  constructor (props) {
    super()
    this.state = {
      name: subway.name,
      tableQuantity: subway.tableQuantity
    }
  }
  render () {
    const newArr = []
    for (var i = 1; i <= this.state.tableQuantity; i++) {
      newArr.push(i)
    }
    const table = [...newArr].map((restoTable, index) => {
      return (
        <Col key={index} s={2} className='grid-example'>
          <CardPanel className='teal lighten-4 black-text'>
            <span>{restoTable}</span>
          </CardPanel>
        </Col>
      )
    })

    return (
      <div>
        <h1>Select Table</h1>
        <Row>
          {table}
        </Row>
      </div>
    )
  }
}

export default Tables
