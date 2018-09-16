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
                <div className='map-container' key={i} >
                    <img className='map-img' src={eachOne.img_url} alt="" />
                    <h3 className='map-title'>{eachOne.title}</h3>
                    <hr className='style-two' />
                    <p className='map-description'>{eachOne.description}</p>
                    {eachOne.price === null ? null : <h3 className='map-price'>${eachOne.price}</h3>}

                    <button className='map-button' onClick={() => this.addToCart(eachOne.product_id)}>Add to cart</button>
                </div>
            )
        })
        return (
            <div className='wrap-container'>
                {displayMe}
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

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, { updateCart })(ProductDisplay);