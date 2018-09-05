import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import CategoryTiles from './CategoryTiles';
import './Shop.css';

export default class Shop extends Component {
  state = {
    categoryOptions: [
    {
      title: 'Charcoal', 
      imageUrl: "https://instagram.fmkc1-1.fna.fbcdn.net/vp/d362f764267db34f79f4675933cdacd7/5C301E2C/t51.2885-15/e35/35934420_1022494591234888_757734399696437248_n.jpg",
      category_id: 3 
    },
    {
      title: 'Floral and Cacti', 
      imageUrl: "https://instagram.fmkc1-1.fna.fbcdn.net/vp/62761950a90d5a464409b04508edcc25/5C31A491/t51.2885-15/e35/21148027_274732149691985_8282150501059919872_n.jpg",
      category_id: 2 
    },
    {
      title: 'Wedding',
      imageUrl: "https://instagram.fmkc1-1.fna.fbcdn.net/vp/16f39e5f6701b438164bfa53844db883/5C1CDA53/t51.2885-15/e35/34159755_178095526210592_21120858160365568_n.jpg",
      category_id: 1
    },
    {
      title: 'Custom',
      imageUrl: "https://instagram.fmkc1-1.fna.fbcdn.net/vp/ba164811c772beba332188fa5c16aa48/5C2D5402/t51.2885-15/e35/23969573_544892225903006_2915370929477386240_n.jpg",
      category_id: 4
    },
    {
      title: 'Other',
      imageUrl: "https://instagram.fmkc1-1.fna.fbcdn.net/vp/95bb64397c69e0a0a292725253b36a89/5C31114C/t51.2885-15/e35/24254166_2434923990065532_4278815508842676224_n.jpg",
      category_id: 5
    }
    ]
  }

  componentDidMount(){
    axios.get('/api/products')
      .then(resp => {
        this.setState({
          products: resp.data,
          displayME: resp.data,
        })
      })
  }

  handleFilter(val){
    
    let filtered = val? this.state.products.filter(item=>{
      return(
        item.category.includes(val)
      )
    }): this.state.products;

    this.setState({
      displayME: filtered
    })
  }

  render() {
    const {categoryOptions} = this.state

    let mappedCategories = categoryOptions.map((category,i) => {
      return (
        <CategoryTiles key={i} category={category}/>
      )
    })

    return (
      <div className='shopFront'>
        <Link to='/'><button>Back to Home</button></Link>
        {mappedCategories}
      </div>
    )
  }
}
