import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import './Header.css';
import willow from '../../photos/floral-logo.png';


export default class Header extends Component {
    constructor() {
        super();

        this.state = {
            menuShow: false
        }
        this.menuShowFn = this.menuShowFn.bind(this)
    }


    menuShowFn() {
        this.setState({
            menuShow: !this.state.menuShow
        })
    }

// HEADER RENDERS AND NAV MENU //
    render() {
        return (
            <div>
                <div className='header'>
                
                    <div className='menu' onClick={this.menuShowFn}>
                        <div className='buns-container'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <Link to='/'>
                        <img className='header_logo inline-p' src={willow} alt=""/>
                        <span className='header_title inline-p'>WILLOW WATERS
                        <p className="inline-p">ILLUSTRATIONS</p>
                        </span>

                        
                    </Link>
                    <Link to='/cart'><p className='header_cart_button'>Cart</p></Link>
                    <nav className={(this.state.menuShow ? "dropDownMenuShow" : '') + ' dropDownMenu'}>
                        <ul className='nav'>
                            <Login className="login" />
                            <Link to='/'><li>Home</li></Link>
                            <Link to='/about'><li>About</li></Link>
                            <Link to='/shop'><li>Shop</li></Link>
                            <Link to='/products/1'><li>Wedding</li></Link>
                            <Link to='/portfolio'><li>Portfolio</li></Link>
                            <Link to='/contact'><li>Contact</li></Link>
                            <Link to='/cart'><li>Cart</li></Link>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
