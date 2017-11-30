import React, { Component } from 'react'
import { Card, Col } from 'react-materialize'

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
    return (
      <div>
        <h1>Select Table Order</h1>
        <div>{
          [...Array(this.state.tableQuantity)].map((x, i) =>
            <Col m={1} s={5} key={i}>
              <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
                {i + 1}
              </Card>
            </Col>
          )
          }</div>
      </div>
    )
  }
}

export default Tables
