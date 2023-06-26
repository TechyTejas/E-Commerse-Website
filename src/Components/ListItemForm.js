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
        type:'number',
        // min:'1',
        // max:'5',
        // step:'1',
        // defaultValue:'1'
    }}/>
    <button >Add to Cart</button>
    </form>
  )
}

export default ListItemForm