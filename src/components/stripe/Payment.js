import React, { Component } from 'react'
import {StripeProvider} from 'react-stripe-elements'

import MyStoreCheckout from './MyStoreCheckout'

class Payment extends Component {
  render () {
    return (
      <div>
      <h1>Payment Page</h1>
      <StripeProvider apiKey="pk_test_7agSFzp7ZGjjv2ASWyG78njN">
        <MyStoreCheckout />
      </StripeProvider>
      </div>
    )
  }

}

export default Payment
