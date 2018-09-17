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
    deleteFromCart(productId) {
        axios.delete(`/api/cart/${productId}`)
            .then(res => {
                this.props.updateCart(res.data)
            })
    }
    // CHANGE QTY OF ITEM INCREASE AND DECREASE W/ PRODID & PROD QTY RETURN NEW CART//
    changeQuantity(productId, productQuantity) {
        console.log({ productId, productQuantity })
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
                return accumulator += (eachProduct.quantity * eachProduct.price)
            }, 0).toFixed(2)
        } else {
            total = '0.00'
        }

        this.props.updateCartTotal(total)
        return (
            <div className='cart_container'>
                <h2 className='cart-header'>SHOPPING CART</h2>
                <p className='span-list'>ITEM</p> <p className='span-list2'><span> PRICE </span> QTY. <span>SUB TOTAL</span></p>
                <hr className='hr-cart' />
                {this.props.cart[0] ? this.props.cart.map((eachProduct, i) => {
                    //console.log(eachProduct)

                    return (
                        <div className='mapped-cart' key={i}>
                            <div className='item-group'>
                                <button className='remove-item' onClick={() => this.deleteFromCart(eachProduct.product_id)}>x</button>
                            </div>
                            <div className='div-image'>
                                <img className='mapped-img' src={eachProduct.img_url} alt="" />
                            </div>
                            <div className='price'>
                                <h6 className='mapped-price' >${eachProduct.price}</h6>
                            </div>
                            <div className='qty'>
                                <input className='input-box' onChange={(e) => this.changeQuantity(eachProduct.product_id, e.target.value)} type="box" />
                                <h6 className='mapped-quantity' >Qty. {eachProduct.quantity}</h6>
                            </div>
                            <h4 className='sub-total' >${eachProduct.price * eachProduct.quantity}</h4>
                        </div>
                    )
                }) : 'You currently have no items in your cart.'}
                <div>
                    <hr className='hr-cart' />
                    <h3 className='total-price'>Total: ${total}</h3>
                    <Payment />
                </div>
                <div className='footer_div'>
                    <footer>
                        <h3 className='footer_h3'> HOURS </h3>
                        <p className='p'>
                            by appointment only please contact me via email to book an appointment!
                                </p>
                        <h3 className='footer_h3'> GET IN TOUCH</h3>
                        <h5 className='footer_h5'> willowwatersillustration@gmail.com </h5>
                        <hr className='style-one' />
                        <ul className='footer_links'>
                            <li><a href="https://www.instagram.com/willow_waters_illustration/"><i class="fab fa-instagram"></i></a></li>
                            <li><a href='https://www.facebook.com/WillowWatersIllustration/photos/a.541908616153030/649807038696520/?type=3&notif_t=page_post_reaction&notif_id=1535576390064491&ref=bookmarks&soft=notifications'><i class="fab fa-facebook"></i></a></li>
                            <li><a href="https://www.pinterest.com/pin/790452172070852254/?lp=true"><i class="fab fa-pinterest"></i></a></li>
                            <li><a href="https://mobile.twitter.com/willow_waters_i"><i class="fab fa-twitter"></i></a></li>
                        </ul>
                    </footer>
                </div>
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