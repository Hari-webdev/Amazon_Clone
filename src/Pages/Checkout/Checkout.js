import React from 'react'
import "../Checkout/Checkout.css"
import Header from '../../components/Header/Header'
import { useStateValue } from '../../StateProvider/StateProvider'
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import Subtotal from '../../components/SubTotal/Subtotal';
import Footer from '../../components/CheckoutProduct/Footer/Footer';



const Checkout = () => {
     
    const [{ basket }]= useStateValue();
  return (
    <div>
        <div className="checkout__header"><Header /></div> 
     <div className='checkout'>  
      
        <div className='checkout__left'>
         <img className='checkout__ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/LPAOffers/April/Prime/Store/V2/LPA501_1500x250.jpg' alt="ad" />
          
          {
            basket.length === 0 ? (
                <div>
                    <h2>Your shopping basket is empty</h2>
                    <p>You have no items in your basket. To buy or more items, click "Add to Basket" next to the item.</p>
                </div>

            ) : ( 
            <div><h2 className='checkout__title'>Your shopping basket</h2> 
            {
                basket.map((item)=>{
                  return <CheckoutProduct key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />

                })}
                </div>)
                } 
                </div>
                {basket.length > 0  && (
                    <div className="checkout__right"> 
                    <Subtotal />
                    
                    </div>
                )} 

     </div>
     <Footer/>
     </div>
  
  )
}

export default Checkout