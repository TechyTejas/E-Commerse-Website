import React  from 'react'
import classes from './ListItem.module.css'
import {  toast } from 'react-toastify';

function ListItemForm(props) {
    const number=1;
    const submitHandler = (event) =>{
        event.preventDefault();
        props.onAddToCart(number);
        toast.success('Item is added to the cart!',{position:"bottom-right",closeOnClick: true,
        pauseOnHover: false,theme: "colored"})
    }

  return (
  
    <form onSubmit={submitHandler}>
    <button className={classes.button}>Add to Cart</button>
    </form>

  )
}
export default ListItemForm


//https://fkhadra.github.io/react-toastify/introduction/
