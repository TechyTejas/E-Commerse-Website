import React,{useRef} from 'react'
import Input from './UI/Input'

function ListItemForm(props) {
    const amountInputRef = useRef(1)

    const submitHandler = (event) =>{
        event.preventDefault();
        props.onAddToCart(amountInputRef);
    }
  
  return (
    <form onSubmit={submitHandler}>
    <Input   
     ref={amountInputRef}
    label="Quantity" 
    input={{
        id:'amount',
        type:'number'
    }}/>
    <button >Add to Cart</button>
    </form>
  )
}

export default ListItemForm