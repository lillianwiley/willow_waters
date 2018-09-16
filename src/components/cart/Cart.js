import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart, updateCartTotal } from '../../ducks/reducer';
import Payment from '../stripe/Payment';
import axios from 'axios';
import './Cart.css'

class Cart extends Component {
    //retrieving cart from database and saving it to state in redux//
    componentDidMount() {
        axios.get('/api/cart')
            .then(res => {
                this.props.updateCart(res.data)
            })
    }
    // DELETE ITEM FROM CART USING PRODUCT ID AS PARAM //
    deleteFromCart(productId){
        axios.delete(`/api/cart/${productId}`)
            .then(res => {
                this.props.updateCart(res.data)
            })
    }
    // CHANGE QTY OF ITEM INCREASE AND DECREASE W/ PRODID & PROD QTY RETURN NEW CART//
    changeQuantity(productId, productQuantity){
        console.log({productId, productQuantity})
        if (productQuantity) {

        axios.put(`/api/cart/${productId}/${productQuantity}`)
            .then(res => {
                console.log(res.data)
                this.props.updateCart(res.data)
            })
            .catch(() => {
                console.log('error error swiss family robinson')
            })
        }
    }


    // SHOPPING CART RENDERS AND REDUCE TO TOTAL ALL PRODUCTS //
    render() {
        let total = ''
       if (this.props.cart[0]) {
            total = this.props.cart.reduce((accumulator, eachProduct) => {
            return accumulator += (eachProduct.quantity*eachProduct.price)
           }, 0).toFixed(2)
        } else {
            total = '0.00'
        }

        this.props.updateCartTotal(total)
        return (
            <div className='cart_header'>
                <h2>SHOPPING CART</h2>
                <h2>
                {this.props.cart[0] ? this.props.cart.map((eachProduct,i) => {
                    //console.log(eachProduct)
                    return (
                        <div className='mapped-cart'key={i}>
                            <button className='remove-item' onClick={() => this.deleteFromCart(eachProduct.product_id)}>Remove item</button>
                            <img className='mapped-img' src={eachProduct.img_url} alt=""/>
                            <h5>{eachProduct.title}</h5>
                            <h6>${eachProduct.price}</h6>
                            <h6>Qty. {eachProduct.quantity}</h6>
                            <h4>${eachProduct.price*eachProduct.quantity}</h4>
                            <input className='input-box' onChange={(e) => this.changeQuantity(eachProduct.product_id, e.target.value )}type="box"/>
                            <hr />
                        </div>
                    )
                }) : 'You currently have no items in your cart.'}
            </h2>
            <h3>${total}</h3>
            <Payment />
            </div>
        )
    }
    
}
//pulling from the redux state
function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, { updateCart, updateCartTotal })(Cart)
//exporting Cart and importing redux state (mapStateToProps) and importing and exporting action create addToCart