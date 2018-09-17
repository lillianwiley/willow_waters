import React from 'react'
import {Link} from 'react-router-dom';
import './CategoryTiles.css'


export default (props) => {
  return (
    <div className='category-title'>
      <Link to={`/products/${props.category.category_id}`}>
        <h2 className='cat-title'>
          {props.category.title}
        </h2>
        <div className="img-container">
          <img className="shop-img" src={props.category.imageUrl} alt=""/>
          </div>
          
      </Link>
    </div>
  )
}
