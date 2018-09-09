import React from 'react'
import {Link} from 'react-router-dom';

export default (props) => {
  return (
    <div>
      <Link to={`/products/${props.category.category_id}`}>
        <h2>
          {props.category.title}
        </h2>
        <div className="img-container">
          <img className="shop-img" src={props.category.imageUrl} alt=""/>
          </div>
      </Link>
    </div>
  )
}
