import { Route,Routes } from 'react-router-dom';
import Store from '../Components/Store';
import About from '../Pages/About';
import Headpage from '../Pages/Headpage';

import React from 'react'
import ContactUs from '../Pages/ContactUs';

function Routee() {
  return (
    <React.Fragment>
    <Routes>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/" element={<Headpage/>}></Route>
      <Route path="/store" element={<Store/>}></Route>
      <Route path="/contact" element={<ContactUs/>}></Route>
    </Routes>
    </React.Fragment>
  )
}

export default Routee


