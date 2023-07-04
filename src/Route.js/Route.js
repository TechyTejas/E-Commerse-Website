import { Route,Routes ,Navigate} from 'react-router-dom';
import Store from '../Components/Store';
import About from '../Pages/About';
import Headpage from '../Pages/Headpage';

import React ,{useContext} from 'react'
import ContactUs from '../Pages/ContactUs';
import LoginForm from '../Pages/LoginForm';
import AuthContext from '../LoginStore/Auth-context';

function Routee() {
  const authCtx=useContext(AuthContext);

  return (
    <React.Fragment>
    <Routes>
       <Route path="/about" element={<About/>}></Route>
      <Route path="/" element={<Headpage/>}></Route>
      <Route path="/store" element={authCtx.isLoggedIn ? (<Store />) : 
          (<Navigate to="/login" replace />)}/>
      <Route path="/contact" element={<ContactUs/>}></Route>
      <Route path="/login" element={<LoginForm/>}></Route> 
    </Routes>
    </React.Fragment>
  )
}

export default Routee


