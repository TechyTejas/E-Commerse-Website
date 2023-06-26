import React from 'react'
import classes from './header.module.css' 
import HeaderCartBTn from './HeaderCartBTn'

function Header(props) {
  return (
  <React.Fragment>
    <header className={classes.headerr}>

      <ui className={classes.header}>
      <li><a href='#' className={classes.icon}>Home</a></li>
      <li><a href='#' className={classes.icon}>Store</a></li>
      <li><a href='https://www.youtube.com/' className={classes.icon}>About</a></li> 
      <HeaderCartBTn onClick={props.onClick} />
      </ui>
    
      <h1 className={classes.boxx}>The Generics</h1>
    </header>
   
  </React.Fragment> 
  )
}

export default Header