import React from 'react';


const Nav = ({navProp}) => {
    return (

  <nav>
    <div className="nav-wrapper container">
      <a href="/" className="brand-logo">{ navProp.title }</a>

      <ul id="nav-mobile" className="right hide-on-med-and-down">

        <li><a href="/">Register</a></li>
        <li><a href="/">Login</a></li>
        <li><a href="/"></a></li>

      </ul>
    </div>
  </nav>


    )
  }


export default Nav;
