import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import { Navbar } from 'react-materialize';

class Header extends Component {
  render() {
    return (
      <Navbar brand='OmniApp' right className="blue">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/qrcode">Scan QR Code</NavLink></li>
        <li><NavLink to="/tables">View Tables</NavLink></li>
        <li><NavLink to="/payment">Payment</NavLink></li>

        </Navbar>
    )
  }
}

export default Header
