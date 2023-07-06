import React from "react";
import classes from './Cart.module.css'

const CartItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;
   

  return (
    <React.Fragment>

      
        <h2>{props.title}</h2>
        {/* <div > */}
        {/* <img src={props.image} style={{ height: '100px' }} /> */}
          {/* <span> X {props.amount}</span> */}
        {/* </div> */}
        <img src={props.image} style={{ height: '100px' }} />

        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>{price}</div>
        <button onClick={props.onRemove} style={{ marginLeft: '20px' }} className={classes.button}>Remove</button>

        {/* <button onClick={props.onAdd}>+</button> */}
        </div>
    </React.Fragment>
  );
};

export default CartItem;
