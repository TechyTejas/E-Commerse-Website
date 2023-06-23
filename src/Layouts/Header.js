import React from 'react'
import classes from './header.module.css' 

function Header() {
  return (
  <React.Fragment>
    <header className={classes.headerr}>
      <ui  className={classes.header}>
      <li ><a href='#' className={classes.icon}>Home</a></li>
      <li><a href='#' className={classes.icon}>Store</a></li>
      <li><a href='#' className={classes.icon}>About</a></li>
      </ui>
      <h1 className={classes.boxx}>The Generics</h1>
    </header>
  </React.Fragment>
  )
}

export default Header