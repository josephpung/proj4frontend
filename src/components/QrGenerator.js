import React, { Component } from 'react'
import QRCode from 'qrcode.react'



class QrGenerator extends Component {
  constructor (props) {
    super()
  }
  render () {
    return (
      <div>
        <h1>QR Code Generator</h1>
        <QRCode value="http://localhost:3000/login" />
      </div>
    )
  }
}

export default QrGenerator
