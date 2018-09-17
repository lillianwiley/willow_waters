import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../Login/Login';
import './Header.css';
import willow from '../../photos/floral-logo.png';


class Header extends Component {
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
        let cartCount = 0
        if (this.props.cart) {
            console.log(this.props.cart)
            cartCount = this.props.cart.reduce((acc, product) => {
                return (
                    acc+product.quantity
                )
            }, 0)
        }
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
                        <img className='header_logo inline-p' src={willow} alt="" />
                        <span id='header_title' className='header_title inline-p'>
                            <div className='testing_header'>
                                WILLOW WATERS ILLUSTRATIONS
                        </div>
                        </span>
                    </Link>
                    <Link to='/cart'>
                        <p className='header_cart_button'>
                            Cart {cartCount}
                        </p>
                    </Link>
                    <nav className={(this.state.menuShow ? "dropDownMenuShow" : '') + ' dropDownMenu'}>
                        <ul className='nav'>
                            <Login />
                            <Link to='/'><li className='nav' onClick={this.menuShowFn}>Home</li></Link>
                            <Link to='/about'><li className='nav' onClick={this.menuShowFn}>About</li></Link>
                            <Link to='/shop'><li className='nav' onClick={this.menuShowFn}>Shop</li></Link>
                            <Link to='/products/1'><li className='nav' onClick={this.menuShowFn}>Wedding</li></Link>
                            <Link to='/cart'><li className='nav' onClick={this.menuShowFn}>Cart</li></Link>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cart } = state
    return {
        cart
    }
}

export default connect(mapStateToProps)(Header)
