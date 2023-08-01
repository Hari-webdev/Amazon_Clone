import React from 'react'
import "../Footer/Footer.css"
import Scroll from './ToTop/ScrollToTop'




const Footer = () => {
  return (

    <div className='Footer__Master'>
    <div className='Footer__Main'>
           
        <div>
         <Scroll />
        </div>
        <div className='Footer__sub'>
            <h3>Get to Know Us</h3>
            <h4>About us</h4>
            <h4>Careers</h4>
            <h4>Press Release</h4>
            <h4>Amazon Science</h4>
        </div>
        <div className='Footer__sub'>
            <h3>Connet with us</h3>
            <h4>Facebook</h4>
            <h4>Twitter</h4>
            <h4>Instagram</h4>
        </div>
        <div className='Footer__sub'>
            <h3>Make Money with us</h3>
            <h4>Sell on Amazon</h4>
            <h4>Sell under Amazon Accelerator</h4>
            <h4>Amazon Global Selling</h4>
            <h4>Become an Affiliate</h4>
            <h4>Fulfilment by Amazon</h4>
            <h4>Advertise Your Products</h4>
            <h4>Amazon Pay on Merchants</h4>

        </div>
        <div className='Footer__sub'>
            <h3>Let Us Help You</h3>
            <h4>COVID-19 and Amazon</h4>
            <h4>Your Account</h4>
            <h4>100% Purchase Protection</h4>
            <h4>Amazon App Download</h4>
            <h4>Help</h4>

           
            	
        </div>
      
        </div> 
    
        <div className='Footer--little__main'>
            <div className='Footer__logo'>
                <img src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'/>
            </div>

            <div className='Footer__country' >
                <h6> 
                    Australia
               
                
Canada
Brazil
China
France
Germany
Italy
Japan
Mexico
Netherlands
Poland
Singapore
Spain
Turkey
United Arab Emirates
United Kingdom
United States
                </h6>
                
            </div>
            
        </div>


         <div className="final__footer">
         <div className='final__subfooter'>
             <p>
                
              AbeBooks<br/>
              Books, art<br/>
              & collectibles<br/>
             </p>

             <p>Amazon Web Services <br/>
Scalable Cloud<br/>
Computing Services</p><br/>
             <p>Audible<br/>
Download<br/>
Audio Books</p><br/>
             <p>DPReview<br/>
Digital<br/>
Photography</p><br/>
             <p>IMDb<br/>
Movies, TV<br/>
& Celebrities <br/>


</p>
             <p>Shopbop<br/>
Designer<br/>
Fashion Brands</p><br/>
             <p>Amazon Business<br/>
Everything For<br/>
Your Business<br/></p>
             <p>Prime Now<br/>
2-Hour Delivery<br/>
on Everyday Items<br/></p>
             <p>	Amazon Prime Music<br/>
100 million songs, ad-free<br/>
Over 15 million podcast episodes<br/></p>
             
         </div> 
         </div>
        <div className='private__notes'>
            <div>Conditions of Use & Sale Privacy Notice Interest-Based Ads </div> 
               <div>© 1996-2023, Amazon.com, Inc. or its affiliates</div>
        </div>

    </div>
  )
}

export default Footer;

