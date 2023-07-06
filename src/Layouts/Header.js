import React,{useContext} from 'react'
import classes from './header.module.css' 
import HeaderCartBTn from './HeaderCartBTn'
import { Link} from 'react-router-dom';
import AuthContext from '../LoginStore/Auth-context';
 

function Header(props) {
  const authCtx=useContext(AuthContext);

  const logoutHandler=()=>{
     authCtx.logout();
  }
  const isLoggedIn = authCtx.isLoggedIn;
  return (
     
  <React.Fragment>
     
      <ui className={classes.header}>
      <li className={classes.comp}> ShipCart.Com </li>

      <div className={classes.headerdiv}>
      <li><Link to='/' className={classes.icon}>Home</Link></li>
      <li><Link to='/store' className={classes.icon}>Store</Link></li>
      <li><Link to='/about' className={classes.icon}>About</Link></li> 
      <li><Link to='/contact' className={classes.icon}>Contact Us</Link></li>
      <li><Link to='/login' className={classes.icon}>Login</Link></li>
      </div>

      <div className={classes.btnn}>
      {isLoggedIn && <HeaderCartBTn onClick={props.onClick} />}
      {isLoggedIn && ( <button className={classes.logout} onClick={logoutHandler}>Logout</button> )}
      </div>
      </ui>
      

  </React.Fragment> 
  
  )
}

export default Header