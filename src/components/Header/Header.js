import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Login from '../Login/Login';
import './Header.css';
import willow from '../../photos/floral-logo.png';


export default class Header extends Component {
    constructor() {
        super();

        this.state = {
            menuShow: false,
            allQuantity: 0
        }
        this.menuShowFn = this.menuShowFn.bind(this)
        this.getCartQuantity = this.getCartQuantity.bind(this)
    }


    menuShowFn() {
        this.setState({
            menuShow: !this.state.menuShow
        })
    }
// updating the visible quantity for the cart in header //
    getCartQuantity(){
        axios.get('/api/getcartquantity')
            .then(res => {
                this.setState({
                    allQuantity: res.data[0].sum
                })
            })
    }

    componentDidMount(){
        this.getCartQuantity()
    }

    componentDidUpdate(prevProps){
        if(this.state.allQuantity !== prevProps.allQuantity){
            this.getCartQuantity()
        }
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
                        <span id='header_title' className='header_title inline-p'>
                        <div className='testing_header'>
                        WILLOW WATERS ILLUSTRATIONS
                        </div> 
                        </span>
                    </Link>
                    <Link to='/cart'><p className='header_cart_button'>Cart {this.state.allQuantity}</p></Link>
                    <nav className={(this.state.menuShow ? "dropDownMenuShow" : '') + ' dropDownMenu'}>
                        <ul className='nav'>
                            <Login/>
                            <Link to='/'><li className='nav' onClick={this.menuShowFn}>Home</li></Link>
                            <Link to='/about'><li className='nav' onClick={this.menuShowFn}>About</li></Link>
                            <Link to='/shop'><li className='nav' onClick={this.menuShowFn}>Shop</li></Link>
                            <Link to='/products/1'><li className='nav' onClick={this.menuShowFn}>Wedding</li></Link>
                            <Link to='/portfolio'><li className='nav' onClick={this.menuShowFn}>Portfolio</li></Link>
                            <Link to='/contact'><li className='nav' onClick={this.menuShowFn}>Contact</li></Link>
                            <Link to='/cart'><li className='nav' onClick={this.menuShowFn}>Cart</li></Link>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
