import { Search, ShoppingBasket } from '@material-ui/icons';
import React from 'react';
import "../Header/Header.css"
import { Link } from 'react-router-dom';
import Subheader from './Subheader/Subheader';
import { useStateValue } from '../../StateProvider/StateProvider';
import auth from '../../Firebase';




const Header = () => {
 

    const [{basket,user}]=useStateValue();
  
    const login=()=>{
        if(user){
            auth.signOut();
        }
    }
  return (
    <div>
    <nav className='header'>
         <Link to={"/"}> 
        <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Logo"/>
       </Link>
       <div className='header__search'>
        <input className='header__searchInput'/>
        <Search className='header__searchIcon'/>
        </div>

        <div className='header__nav'>

            <Link to={ !user && "/login"}>
            <div className='header__option' onClick={login}>
                <span className='header__optionLineOne'>Hello {user?.email}</span>
                <span className='header__optionLineTwo'>{user ? "Sign Out" : "Sign in"}</span>
            </div></Link>

             <Link to="/">
            <div className='header__option'>
                <span className='header__optionLineOne'>Return </span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div></Link>

            <Link to="/">
            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>
            </Link>
              
              <Link to="checkout">
            <div className='header__optionBasket'>
                <ShoppingBasket/>
                <span className='header__optionLineTwo header__basketCount'>{basket.length} </span>
            </div>
            </Link>


        </div>
       

        


    </nav>
    
      <Subheader/>  
    </div>
  )
}

export default Header;






                     
