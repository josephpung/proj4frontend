import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class Qrcode extends Component {
  constructor (props) {
    super(props)
    this.state = {
      delay: 300,
      result: 'No result'
    }
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan (data) {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError (err) {
    console.error(err)
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
