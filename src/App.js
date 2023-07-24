import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Components/CartCompo.js/Cart';
import Header from './Layouts/Header';
import React, {useState} from 'react';
import CartProvider from './Components/Store/CartProvider';
import Footer from './Layouts/Footer';
import Route from './Route.js/Route';




function App() {
  const[cartIsShown,setCartIsShown]=useState(false)

  const ShowCartHandler =()=>{
    setCartIsShown(true)
  }

  const HideCartHandler =()=>{
    setCartIsShown(false)
  }

  return (
    
     
    <CartProvider> 
    {cartIsShown &&  <Cart onClose={HideCartHandler}/>}
    <Route/>
    <Header onClick={ShowCartHandler}/>
    <Footer/>
    </CartProvider>
   
  );
}

export default App;
