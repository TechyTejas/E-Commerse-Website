

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
   

  return (
    <li >
      <div>
        <h2>{props.title}</h2>
        <div >
          <span>{price}</span>
          <span> X {props.amount}</span>
        </div>
      </div>
      <div>
        <button onClick={props.onRemove}>Remove</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
