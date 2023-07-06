import React from 'react'
import classes from './Store.module.css'
import ListItemForm from './ListItemForm';
import { useContext } from 'react';
import CartContext from './Store/cart-context';
import axios from 'axios';



 function ListItem (props) {
    const url=props.url;
    const item=props.item;
    const cartCtx = useContext(CartContext)

  //if we login then the email is in localStorage for doing the post request the getting that email id neccessary
  const enteredEmail=localStorage.getItem('email');
  const updatedEmail = enteredEmail ? enteredEmail.replace('@', '').replace('.', '') : '';
    
    //here we have to use post
    async function addToCartHandler (amount) {  //amount refer tto quantity
      // console.log(amount)

      cartCtx.addItem({
        id:props.id,
        title:props.title,
        amount:amount,
        price:props.price,
        url:props.url
      })
      console.log("data is addded through this cartCtx")
      try {
        // ... existing code ...
        const response = await axios.post(
          `https://crudcrud.com/api/cd8de9263555424aae79ab6c9312950e/${updatedEmail}`,item);
        console.log(response.data);
      } catch (error) {
        console.log('AxiosError:', error);
      }
    }
  

  return (
   
        <div className={classes.master}>
          <div className={classes.topdiv}>
            <h2 className={classes.heading}>{props.title}</h2>
            <div>
            <img src={url} className={classes.images} alt={props.url} />
            </div>
            <div className={classes.prodprice}>
              <span>{props.price}₹</span> 
              <span><ListItemForm onAddToCart={addToCartHandler}/></span>
            </div>
          </div>
        </div>
    
  )
}

export default ListItem