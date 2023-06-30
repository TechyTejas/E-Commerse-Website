import React from 'react'
import classes from './header.module.css' 
import HeaderCartBTn from './HeaderCartBTn'
import { Link} from 'react-router-dom';
 

function Header(props) {
  return (
     
  <React.Fragment>
     
      <ui className={classes.header}>
        
      <li><Link to='/' className={classes.icon}>Home</Link></li>
      <li><Link to='/store' className={classes.icon}>Store</Link></li>
      <li><Link to='/about' className={classes.icon}>About</Link></li> 
      <li><Link to='/contact' className={classes.icon}>Contact Us</Link></li>
      <HeaderCartBTn onClick={props.onClick} />
      </ui>
      

  </React.Fragment> 
  
  )
}

export default Header