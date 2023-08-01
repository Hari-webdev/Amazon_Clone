import React,{useState} from 'react'
import "../SubTotal/SubTotal.css"
import * as CurrencyFormat from "react-currency-format"
import { useStateValue } from '../../StateProvider/StateProvider'
import { getBasketTotal } from '../../StateProvider/reducer'


const Subtotal = () => {
    const [{basket}] = useStateValue();
    const [amount, setamount] = useState(getBasketTotal(basket))

    const handlesubmit = (e)=>{
        e.preventDefault();
    
            var option = {
                key: "rzp_test_Ckf807fKJ6Dbk1",
                key_secret:"zXp2fCWjqWHLutKdVBRFcx4j",
                amount:amount *100,
                currency: "INR",
                name:"AMAZON RAZORPAY",
                image:"https://www.freeiconspng.com/thumbs/amazon-icon/amazon-icon--socialmedia-iconset--uiconstock-0.png",
                discription:"Payment Secure",
                handler: function(){
                    alert("Payment success");
                },
                prefill:{
                    name:"Amazon pay",
                    email:"example@gamil.com",
                    contact:"7418529635"
                },
                notes:{
                    address:"Razorpay Corporate Office",
                },
                theme:{
                    color:"#cd9042"
                }
            };
        
            var pay = new window.Razorpay(option);
            pay.open();
    
    }

  return (
    <div className='subtotal'>

        <CurrencyFormat renderText={(Value)=>{
     
            return (
                <>
                <p>Subtotal({basket.length} item): <strong value={amount} onChange={(e)=>setamount(e.target.value)}>{`${Value}`}</strong></p>
                <small className='subtotal__gift'>
                    <input type="checkbox"/>
                    This order contains a gift
                </small>
                
                <button onClick={handlesubmit}>Proceed to checkout</button>
                </>       
            )

            
       }} 
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹ "}
        
        />
        

    </div>
  )
}

export default Subtotal;



