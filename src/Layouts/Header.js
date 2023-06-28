import React from 'react'
import classes from './header.module.css' 
import HeaderCartBTn from './HeaderCartBTn'
import { Link} from 'react-router-dom';
import Footer from './Footer';


function Header(props) {
  return (
     
  <React.Fragment>
     
      <ui className={classes.header}>
        
      <li><Link to='/' className={classes.icon}>Home</Link></li>
      <li><Link to='/store' className={classes.icon}>Store</Link></li>
      <li><Link to='/about' className={classes.icon}>About</Link></li> 
      <HeaderCartBTn onClick={props.onClick} />
      </ui>
      <Footer/>
      

  </React.Fragment> 
  
  )
}

export default Header