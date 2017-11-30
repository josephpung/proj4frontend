import React, { Component } from 'react';

import Header from './Header'
import Main from './Main'



class App extends Component {

  render() {
    return (
    <div className="App">
      <Header />

      <div className="container">
        <Main />
      </div>

    </div>
    )
  }
}


export default App
