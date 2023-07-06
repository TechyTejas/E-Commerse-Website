import React  from 'react'
import classes from './ListItem.module.css'


function ListItemForm(props) {
    const number=1;
    const submitHandler = (event) =>{
        event.preventDefault();
        props.onAddToCart(number);
    }

  return (
    <form onSubmit={submitHandler}>
    <button className={classes.button}>Add to Cart</button>
    </form>
  )
}

export default ListItemForm

//imp input