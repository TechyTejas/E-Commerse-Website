import React,{useContext} from 'react'
import classes from './HeaderCartBtn.module.css'
import CartContext from '../Components/Store/cart-context' 


function HeaderCartBTn(props) {
  // const cartCtx=useContext(CartContext)

  // items contain empty array
  // const numberofItems = cartCtx.items.reduce((currNumber,item) =>{
  //   return currNumber + item.amount;
  // })
  return (
    <div>
        <button onClick={props.onClick} className={classes.button}>
            <span>Your Cart</span>
            {/* <span> {numberofItems}</span> */}
        </button>
    </div>
  )
}

export default HeaderCartBTn