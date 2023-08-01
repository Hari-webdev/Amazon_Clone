import React, { useEffect } from 'react'
import { BrowserRouter as Router,Route ,Routes } from 'react-router-dom'
import Checkout from './Pages/Checkout/Checkout'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import { useStateValue } from './StateProvider/StateProvider';
import auth from './Firebase'

const App = () => {
        const [{ basket },dispatch] = useStateValue()
     useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged((authUser)=>{
        if(authUser){
          dispatch({
            type:"SET_USER",
            user:authUser
          })

        }
        else{
          dispatch({
            type:"SET_USER",
            user:null
          })

        }
      })

      return()=>{
        unsubscribe();
      }
     },[dispatch])

  return (

    
    <Router>
      <Routes>
        <Route exact path="/checkout" element={(<Checkout/>)}></Route>
        <Route exact path="/login" element={(<Login/>)}></Route>
        <Route exact path="/" element={(<Home/>)}></Route>
      </Routes>
    </Router>


    
  )
  }
export default App;