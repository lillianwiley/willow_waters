import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Login from '../Login/Login';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='Header'>
          <h1>Willow Waters</h1>
          <h3>Illustrations</h3>
        </div>
         <nav>
          <ul className='Nav'>
            <Link to='/blog'><li>Blog</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/shop'><li>Shop</li></Link>
            <Link to='/'><li>Home</li></Link>
          </ul>
        </nav>
        <Login className="login" />
      </div>
    )
  }
}
