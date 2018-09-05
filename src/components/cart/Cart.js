import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../../ducks/reducer';
import axios from 'axios';

class Cart extends Component {
    //retrieving cart from database and saving it to state in redux
    componentDidMount() {
        axios.get('/api/cart')
            .then(res => {
                this.props.updateCart(res.data)
            })
    }

    deleteFromCart(productId){
        // console.log(productId)
        axios.delete(`/api/cart/${productId}`)
            .then(res => {
                this.props.updateCart(res.data)
            })
    }

    changeQuantity(productQuantity, productId){
        axios.put(`/api/cart/${productId}/${productQuantity}`)
            .then(res => {
                this.props.updateCart(res.data)
            })
    }

    render() {
       if (this.props.cart[0]) {
           var total = this.props.cart.reduce((accumulator, eachProduct) => {
            return accumulator += (eachProduct.quantity*eachProduct.price)
           }, 0).toFixed(2)
        } else {
            var total = '0.00'
        }
        return (
            <div><h2>
                {this.props.cart[0] ? this.props.cart.map((eachProduct,i) => {
                    //console.log(eachProduct)
                    return (
                        <div key={i}>
                            <h5>title {eachProduct.title}</h5>
                            <h6>price {eachProduct.price}</h6>
                            <h6>quantity {eachProduct.quantity}</h6>
                            <h6>product id {eachProduct.product_id}</h6>
                            <h4>{eachProduct.price*eachProduct.quantity}</h4>
                            <input onChange={(e) => this.changeQuantity(e.target.value, eachProduct.product_id )}type="text"/>
                            <button onClick={() => this.deleteFromCart(eachProduct.product_id)}>Remove item</button>
                            <hr />
                        </div>
                    )
                }) : 'You currently have no items in your cart'}
            </h2>
            <h3>${total}</h3>
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

export default connect(mapStateToProps, { updateCart })(Cart)
//exporting Cart and importing redux state (mapStateToProps) and importing and exporting action create addToCart