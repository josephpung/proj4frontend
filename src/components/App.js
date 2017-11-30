import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Header from './Header'
import Main from './Main'


const QUERY = gql`
  # 2
  query Query {
    allRestaurants {
      name
      cuisine
      address
    }

  }
`

const restaurants = [
  {
    id: 1,
    name: "Pizza Express",
    cuisine: "Italian",
    tableQuantity: "10",
    address: "Scotts Square, Unit B1 08/09, 6 Scotts Road, 228209",
    contact: "6538 0083"
  },
  {
    id: 2,
    name: "Din Tai Fung",
    cuisine: "Chinese",
    tableQuantity: "20",
    address: "City Square Mall #01-10, 180 Kitchener Rd, Singapore 208539",
    contact: "6634 2322"
  },
];

class App extends Component {

  constructor(props) {
  super()

  console.log('props at constructor', props.data)

  this.state = {
    users: [],
    currentuser: {},
    allRestaurants: []
  }
}



  render() {

    const navProp = {
      title: 'OmniApp',
      username: 'Yuki',
      useremail: 'yuki@test.com'
    }

    if (!this.props.data.loading) {
    const allRestaurants = this.props.data.allRestaurants.map(post => {
      return (
        <div className="col s12 m4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{ post.name }</span>
              <p>{ post.cuisine }</p>
              <p>{ post.address }</p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <Header />

      <div className="container">
        <Main />
      </div>

        <div className="container">
          <div className="row">
            <h2>Restaurant List</h2>
            {
              allRestaurants
            }
          </div>
        </div>

      </div>
    )
  } else {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <div className="row">
            <h2>Fetching now...</h2>
          </div>
        </div>

      </div>
    )
  }
  }
}

export default graphql(QUERY)(App)
