import React from 'react'
import classes from './Store.module.css'
import ListItemForm from './ListItemForm';
import { useContext } from 'react';
import CartContext from './Store/cart-context';




 function ListItem (props) {
    const url=props.url;
    const cartCtx = useContext(CartContext)
    
    const addToCartHandler = amount =>{  //amount refer tto quantity
      cartCtx.addItem({
        id:props.id,
        title:props.title,
        amount:amount,
        price:props.price
      })
    }
  

  return (
   
        <div className={classes.master}>
          <div className={classes.topdiv}>
            <h2 className={classes.heading}>{props.title}</h2>
            <div>
            <img src={url} className={classes.images} alt={props.url} />
            </div>
            <div className={classes.prodprice}>
              <span>{props.price}$</span> 
              <span className={classes.btn}><ListItemForm onAddToCart={addToCartHandler}/></span>
            </div>
          </div>
        </div>
    
  )
}

export default ListItem