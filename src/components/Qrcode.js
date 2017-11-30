import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { Route, Redirect } from 'react-router-dom'

class Qrcode extends Component {
  constructor (props) {
    super(props)
    this.state = {
      delay: 1000,
      result: 'No result',
      redirect: false
    }
  }
  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = (err) => {
    console.error(err)
  }

  componentDidUpdate () {
      if(this.state.result !== 'No result'){
        this.setState({ redirect: true })
        console.log('mounted')
      }

    }

  render () {
      return (
      <div>
        <h1>QR Code Scanner Goes here</h1>
        <div style={{ width: '300px', margin: 'auto' }}>
          <QrReader
            delay={this.state.delay}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%' }}
          />
          <p>{this.state.result}</p>
        </div>
      </div>
    )
  }
}

export default Qrcode
