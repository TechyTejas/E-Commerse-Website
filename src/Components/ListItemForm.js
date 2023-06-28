import React  from 'react'
import Input from './UI/Input'

function ListItemForm(props) {
    const number=1;
    const submitHandler = (event) =>{
        event.preventDefault();
        props.onAddToCart(number);
    }

  return (
    <form onSubmit={submitHandler}>
    <Input   
    label="Quantity" 
    input={{
        id:'amount',
        type:'number'
    }}/>
    <button>Add to Cart</button>
    </form>
  )
}

export default ListItemForm