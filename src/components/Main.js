import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Qrcode from './Qrcode'
import QrGenerator from './QrGenerator'
import Tables from './staff/Tables'
import Menu from './staff/Menu'
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = (props) => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Login}/>
      <Route path='/qrcode' component={Qrcode}/>
      <Route path='/qrGenerator' component={QrGenerator}/>
      <Route path='/tables' component={Tables}/>
      <Route path='/menu' component={Menu}/>
    </Switch>
  </main>
)

export default Main
