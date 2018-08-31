import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import Login from '../Login/Login';
import './Header.css';


export default class Header extends Component{
    constructor(){
        super();

        this.state ={
            menuShow: false
        }
        this.menuShowFn = this.menuShowFn.bind(this)
      }

    
      menuShowFn(){
        this.setState({
          menuShow: !this.state.menuShow
        })
      }

    render(){
        return(
        <div>
        <head>
        <style>
            @import url('https://fonts.googleapis.com/css?family=Julius+Sans+One');
        </style>
        </head>
        <div className='header'>
        <div className='menu' onClick={this.menuShowFn}>
            <div className='buns-container'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <Link to='/'>
            <h5>Willow Waters
                Illustrations
            </h5>
          </Link>
        <nav className={(this.state.menuShow ? "dropDownMenuShow" : '') + ' dropDownMenu'}>
          <ul className='nav'>
            <Login className="login" />
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/shop'><li>Shop</li></Link>
            <Link to='/blog'><li>Blog</li></Link>
            <Link to='/products/1'><li>Wedding</li></Link>
            <Link to='/portfolio'><li>Portfolio</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
            </ul>
            </nav>
            </div>
            </div>
        )
    }
}
