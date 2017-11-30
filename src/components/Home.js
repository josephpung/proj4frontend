import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

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


class Home extends Component {
  constructor(props) {
  super()

  console.log('props at constructor', props.data)

  this.state = {
    allRestaurants: []
  }

}
  render () {

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
          <div>
            <h1>Welcome to OmniApp!!</h1>
            <p>This is the main page for users/staff</p>

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

            <div className="container">
              <div className="row">
                <h2>Fetching now...</h2>
              </div>
            </div>
          )
        }
      }
    }  


export default graphql(QUERY)(Home)
