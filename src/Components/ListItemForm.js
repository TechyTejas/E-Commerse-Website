import React  from 'react'


function ListItemForm(props) {
    const number=1;
    const submitHandler = (event) =>{
        event.preventDefault();
        props.onAddToCart(number);
    }

  return (
    <form onSubmit={submitHandler}>
    <button>Add to Cart</button>
    </form>
  )
}

export default ListItemForm

//imp input