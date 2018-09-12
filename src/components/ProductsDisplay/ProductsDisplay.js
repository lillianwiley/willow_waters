import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateCart } from '../../ducks/reducer';
import './ProductsDisplay.css';


class ProductDisplay extends Component {
    constructor() {
        super();

        this.state = {
            filteredProducts: []
        }
    }

    componentDidMount() {
        const { category } = this.props.match.params
        axios.get(`/api/products/${category}`)
            .then(res => {
                this.setState({
                    filteredProducts: res.data
                })
            })
    }

    addToCart(productId) {
        // first get product
        console.log(productId)
        // axios
        axios.post(`/api/products/${productId}`)
        .then(res => {
            console.log(res.data)
            this.props.updateCart(res.data)
        })
        .catch((error) => console.log('erra erra error', error))
    }

    render() {
        console.log(this.state.filteredProducts)
        console.log(this.props.cart)
        const { filteredProducts } = this.state;
        let displayMe = filteredProducts.map((eachOne, i) => {
            return (
                <div key={i} >

                    <h1>{eachOne.title}</h1>
                    <p>{eachOne.description}</p>
                    <h3>{eachOne.price}</h3>
                    <img src={eachOne.img_url} alt=""/>

                    <button onClick={() => this.addToCart(eachOne.product_id)}>Add to cart</button>

                </div>
            )
        })
        return (
            <div>
                {displayMe}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, { updateCart })(ProductDisplay);