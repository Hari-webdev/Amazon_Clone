import React from 'react'
import ScrollToTop from "react-scroll-to-top";

const Scroll = () => {
    return (
      <div className='over'>
      
      <ScrollToTop smooth top={20} style={{position:"absolute" , bottom:"140px" ,backgroundColor: " #f0c14b" }}/>
      </div>
    );
  
}

export default Scroll;