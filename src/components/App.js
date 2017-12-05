import React, { Component } from 'react';

import Header from './Header'
import Main from './Main'
import { BrowserRouter as Router } from 'react-router-dom'

import io from 'socket.io-client';

const socket = io('/');


class App extends Component {

  componentDidMount() {
    socket.emit('chat', 'hello')
  }

  render() {
    return (
      <Router>
        <div className="App" socket ={socket}>
          <Header />
        <div className="container">
          <Main />
        </div>
        </div>
      </Router>
    )
  }
}


export default App
