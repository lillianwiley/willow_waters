import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {addToCart} from '../../ducks/reducer';


class ProductDisplay extends Component{
    constructor(){
        super();

        this.state = {
            filteredProducts: []
        }
    }

    componentDidMount(){
        const {category} = this.props.match.params //this.props.match.params is pulling the paramater of the url - products/3 3 is the param
        axios.get(`/api/products/${category}`)
            .then(res => {
                this.setState({
                    filteredProducts: res.data
                })
            })
    }




    render(){
        const {filteredProducts} = this.state;
        let displayMe = filteredProducts.map((eachOne,i)=>{
            console.log(eachOne.product_id)
            return(
                <div key={i} >

                <h1>{eachOne.title}</h1>
                <p>{eachOne.description}</p>
                <h3>{eachOne.price}</h3>
                <button onClick={() => this.props.addToCart(eachOne.product_id)}>Add to cart</button>

            </div>
            )
        })
        return(
            <div>
                {displayMe}
            </div>
        )
    }

}

export default connect(null, {addToCart})(ProductDisplay);

