import React from 'react'
import {Link} from 'react-router-dom';

export default (props) => {
  return (
    <div>
      <Link to={`/products/${props.category.category_id}`}>
        <h2>
          {props.category.title}
        </h2>
          <img src={props.category.imageUrl} alt=""/>
      </Link>
    </div>
  )
}
