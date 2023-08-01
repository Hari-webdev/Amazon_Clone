import React from 'react'
import "../Home/Home.css";
import Slider from '../../components/Header/Slider/Slider';
import Product from '../../components/Product/Product';
import Header from '../../components/Header/Header';
import Footer from '../../components/CheckoutProduct/Footer/Footer';

const Home = () => {
  return (
    <div className='home__container'> 
      <div className='Home__Header'>
         <Header/>
      </div>
       

    <div className='home'>
        <div className='home__slider'>
          <Slider/>
         </div>
         <div className='laptops'>
            
         <div className='home__row'>
            <Product  
            id="5456645"
            title="Apple 2021 iMac with 4.5K Retina Display (24-inch/60.96 cm, M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB) - Silver"
            image="https://i.ibb.co/B6B7DZ9/pngegg-16.png"
            price={125000}
            rating={4} />

            <Product 
              id="456455"
              title="Toshiba Satellite Ultrabook Central processing unit"
              image="https://i.ibb.co/p3G88Gq/Toshiba-Satellite-Ultrabook-Central-processing-unit4.png"
              price={36599}  
              rating={5}
            />

              <Product 
              id="4564564"
              title="Samsung Galaxy Book2 AMOLED Thin & Light Laptop (16 GB/512 GB SSD/Windows 11"
              image="https://i.ibb.co/82YycTv/Black-Samsung-laptop2.png"
              price={56000}  
              rating={5}
            />

             <Product 
              id="7627675"
              title="Acer Extensa 15 Intel Core i5 11th Gen Processor - (8 GB/ 512 GB SSD/ Windows 11)"
              image="https://i.ibb.co/W0gHmY3/Gray-Acer-laptop1.png"
              price={42000}  
              rating={5}
            />



             <Product 
              id="5464564"
              title="Housings Gaming computer Desktop Computers"
              image="https://i.ibb.co/qCRVY3B/Housings-Gaming-computer-Desktop-Computers5.png"
              price={65000}  
              rating={5}
            />

             <Product 
              id="785456"
              title="Laptop Dell Electric battery Lenovo Lithium-ion battery"
              image="https://i.ibb.co/WxzyPzb/Laptop-Dell-Electric-battery-Lenovo-Lithium-ion-battery6.png"
              price={2500}  
              rating={5}
            />  



              <Product 
              id="8234267"
              title="Laptop Dell Computer HP Pavilion Windows 10"
              image="https://i.ibb.co/D7JGQx3/Laptop-Dell-Computer-HP-Pavilion-Windows-10-3.png"
              price={32000}  
              rating={5}
            />
            

              <Product 
              id="9844234"
              title="Branded Fashion snicker kara "
              image="https://i.ibb.co/2sTb79c/snickers1.png"
              price={1120}  
              rating={5}
            />

              <Product 
              id="234565"
              title="Formal shoes"
              image="https://i.ibb.co/mztnQbc/snickerformal.png"
              price={1000}  
              rating={5}
            />

              <Product 
              id="5667433"
              title="Pink & White  Combain colors snicker Kara"
              image="https://i.ibb.co/D8Gndn8/snicker8.png"
              price={1200}  
              rating={5}
            />

              <Product 
              id="23423456"
              title="Black snicker Kara "
              image="https://i.ibb.co/qnKnDrW/snicker7.png"
              price={800}  
              rating={5}
            />

              <Product 
              id="234435"
              title="Normal westen brand shoes"
              image="https://i.ibb.co/TbVzwdn/snicker6.png"
              price={450}  
              rating={5}
            />

              <Product 
              id="655454"
              title="Sports Niek Branded Showes"
              image="https://i.ibb.co/3ksvbqb/snicker5.png"
              price={750}  
              rating={5}
            />

              <Product 
              id="85656"
              title="Angry bird Nike snicker"
              image="https://i.ibb.co/cLVtWfk/snicker4.png"
              price={1000}  
              rating={5}
            />

              <Product 
              id="564344"
              title="Black and layer white Nike snicker"
              image="https://i.ibb.co/XWtrbP8/snicker3.png"
              price={650}  
              rating={5}
            />

              <Product 
              id="1464455"
              title="Kara Brand new purple snicker"
              image="https://i.ibb.co/JmPz97h/snicker2.png"
              price={900}  
              rating={5}
            />

              <Product 
              id="74563434"
              title="i phone 6 Brand New "
              image="https://i.ibb.co/Tr7LdRZ/mobile1.png"
              price={34000}  
              rating={4}
            />
              <Product 
              id="7455563"
              title="Samsung Galaxy Notepad + Tab  Model B30-32 "
              image="https://i.ibb.co/PjWzRyq/mobile8.png"
              price={25000}  
              rating={5}
            />
              <Product 
              id="3245344"
              title="Samsung Galaxy Notepad + Tab Model B99-22"
              image="https://i.ibb.co/Js59LqL/mobile4.png"
              price={15999}  
              rating={5}
            />
              <Product 
              id="456565"
              title="i phoneX 256gb - 8gb ram"
              image="https://i.ibb.co/XVW78Cx/mobile2.png"
              price={125000}
              rating={5}
            />
              <Product 
              id="756546"
              title="Apple smart watch Series-3 Model"
              image="https://i.ibb.co/zbvy2PP/Apple-Watch-Series-3-Apple1.png"
              price={75000}  
              rating={5}
            />
              <Product 
              id="967876"
              title="Apple-Watch-Series-2"
              image="https://i.ibb.co/VjYSPGJ/Apple-Watch-Series-2-Apple-Watch2.png"
              price={52000}  
              rating={4}
            />
              <Product 
              id="456343"
              title="Amazon-com-GPS-Navigation-Systems-Amazfit-Smartwatch"
              image="https://i.ibb.co/2KDf9cv/Amazon-com-GPS-Navigation-Systems-Amazfit-Smartwatch.png"
              price={15000}  
              rating={4}
            />

              <Product 
              id="33343"
              title="Banarasi-sari-Georgette-Gota"
              image="https://i.ibb.co/gPZ1sNV/Zari-Banarasi-sari-Georgette-Gota3.png"
              price={3999}  
              rating={3}
            />
              <Product 
              id="33343"
              title="Women-s-orange-and-black-sari-dress"
              image="https://i.ibb.co/QCHJK4K/Women-s-orange-and-black-sari-dress2.png"
              price={4200}  
              rating={5}
            />
              <Product 
              id="33343"
              title="Women-s-blue-and-orange-tank-maxi"
              image="https://i.ibb.co/Tr3jLP9/Women-s-blue-and-orange-tank-maxi-dress.png"
              price={1700}  
              rating={5}
            />
              <Product 
              id="33343"
              title="Wedding-dress-Evening-gown-Chantilly"
              image="https://i.ibb.co/8YSwY7N/Wedding-dress-Evening-gown-Chantilly-Lace-Bridal-Wear7.png"
              price={4000}  
              rating={3}
            />
              <Product 
              id="33343"
              title="Shoulder-Sleeve-Dress-Costume"
              image="https://i.ibb.co/JC4vWh7/Shoulder-Sleeve-Dress-Costume5.png"
              price={900}  
              rating={5}
            />
              <Product 
              id="33343"
              title="Party-dress-Wedding-dress-Cocktail"
              image="https://i.ibb.co/q7pV6sS/Party-dress-Wedding-dress-Cocktail-dress6.png"
              price={3000}  
              rating={4}
            />
              <Product 
              id="33343"
              title="Evening-gown-Dress-Prom-Chiffon"
              image="https://i.ibb.co/wQWgtkz/Evening-gown-Dress-Prom-Chiffon8.png"
              price={2500}  
              rating={3}
            />
       


             





         </div>
         
         <div className='amazon__banner'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg'/>
         </div>



 

   <div className='Footer'>
            <Footer  />

          </div>


         </div>
         

       

    </div>
</div>

  )
}

export default Home