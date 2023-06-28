import Cart from './Components/CartCompo.js/Cart';
import Header from './Layouts/Header';
import React, {useState} from 'react';
import CartProvider from './Components/Store/CartProvider';
import { Route,Routes } from 'react-router-dom';
import Store from './Components/Store';
import About from './Pages/About';
import Headpage from './Pages/Headpage';


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
    <h1>The Generics</h1>
    <Routes>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/" element={<Headpage/>}></Route>
      <Route path="/store" element={<Store/>}></Route>
    </Routes>
    <Header onClick={ShowCartHandler}/>
    </CartProvider>
   
  );
}

export default App;
