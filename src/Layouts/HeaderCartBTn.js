import React from 'react'
import classes from './HeaderCartBtn.module.css'



function HeaderCartBTn(props) {
  // const cartCtx=useContext(CartContext)

  // items contain empty array
  // const numberofItems = cartCtx.items.reduce((currNumber,item) =>{
  //   return currNumber + item.amount;
  // })
  return (
    <React.Fragment>
        <button onClick={props.onClick} className={classes.button}>
            <span>Your Cart</span>
            {/* <span> {numberofItems}</span> */}
        </button>
    </React.Fragment>
  )
}

export default HeaderCartBTn