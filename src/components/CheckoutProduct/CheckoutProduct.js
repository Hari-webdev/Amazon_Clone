import React from 'react'
import "../CheckoutProduct/CheckoutProduct.css"
import { useStateValue } from '../../StateProvider/StateProvider'

const CheckoutProduct = ({id,title,image,price,rating}) => {
    const [{basket}, dispatch]=useStateValue();
    const removeFromBasket =()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        })
    }
  return (
    <div>
    <div className='CheckoutProduct'>
        <img className='CheckoutProduct__image' src={image}/>
        <div className='checkoutProduct__info'>
            <p className='chckoutProduct__title'>{title}</p>
            <p>
                <small>₹ </small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
                {
                    Array(rating).fill().map((_)=>{
                        <span>⭐</span>
                    })
                }
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
    </div>
  )
}

export default CheckoutProduct