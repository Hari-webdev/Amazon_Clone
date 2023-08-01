import React from 'react'
import "../Product/Product.css"
import { useStateValue } from '../../StateProvider/StateProvider'







const Product = (props)=> {
    const [{basket},dispatch]=useStateValue();
    const addtoBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",

            item:{
                id:props.id,
                title:props.title,
                image:props.image,
                price:props.price,
                rating:props.rating,
            }
        })
    }
  return (


    <div className='Product'>
        
        <div className='product__info'>
            <p>{props.title}</p>
            <p className='product__price'>
                <small>₹ </small>
                <strong>{props.price}</strong>
            </p>
            <div className='product__rating'>
                {Array(props.rating).fill().map((_) => (<span>⭐</span>))}
            </div>
        </div>
    <img src={props.image} alt="" />
    <button onClick={addtoBasket}>Add to basket</button>
    </div>
  )
}

export default Product