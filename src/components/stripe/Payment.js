
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../../ducks/reducer';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';


class Checkout extends Component {

    onToken = (token) => {
        token.card = void 0
        axios.post('/api/payment', { token, amount: this.props.amount *100 })
            .then(res => {
                axios.delete('/api/cart')
                    .then(res => {
                        this.props.updateCart(res.data)
                    })
                console.log(res)
            })
    }



    render() {

        return (
            <StripeCheckout
                name="Willlow Waters Illustrations"
                description="Dolla Dolla Bills Y'all"
                image="../../photos/willow_logo.jpg"
                token={this.onToken}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                amount={this.props.amount*100}
                billingAddress={true}
                shippingAddress={true}
            >
            <div>
                <button className='stripe-checkout'>Checkout</button>
            </div>
            </StripeCheckout>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        amount: state.cartTotal
    }
}

export default connect(mapStateToProps, { updateCart })(Checkout)
