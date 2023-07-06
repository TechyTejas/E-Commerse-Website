import { useEffect, useState } from "react";
import classes from './Cart.module.css'
import Modal from "./Modal";
import CartItem from "./CartItem";
import axios from "axios";

function Cart(props) {
  
  const [cartitems, setCartitems] = useState([]);
  
  const enteredEmail = localStorage.getItem("email");
  const updatedEmail = enteredEmail
    ? enteredEmail.replace("@", "").replace(".", "")
    : "";

  useEffect(() => {
    fetchCartItems();
  }, []);

  async function cartItemRemoveHandler(id) {
    console.log(id, updatedEmail + " we are deleting the data");
    await axios.delete(
      `https://crudcrud.com/api/cd8de9263555424aae79ab6c9312950e/${updatedEmail}/${id}`
    );
    await fetchCartItems();
  }

  async function fetchCartItems() {
    const response = await axios.get(
      `https://crudcrud.com/api/cd8de9263555424aae79ab6c9312950e/${updatedEmail}`
    );
    console.log(response.data);
    console.log("tejas in server getting data");

    const cartItems = response.data.map((item) => ({
      id: item._id,
      title: item.title,
      amount: item.amount,
      price: item.price,
      image: item.imageUrl,
    }));
    setCartitems(cartItems);
  }

  // Calculate the total amount
  const totalAmount = cartitems.reduce(
    (total, item) => total + item.amount * item.price,
    0
  );
  
  const hasItems = cartitems.length > 0;

  const CArtItems=  
  <ul className={classes.scroll}> { cartitems.map((item) => (
    <CartItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      image={item.image}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ))}
  </ul>

  return (
    <Modal onClose={props.onClose} className={'classes.scroll'}>
      {CArtItems}
      <div style={{ fontWeight: 'bold' }}>
        <span>Total Amount</span>
        <span >₹{totalAmount}</span>
      </div>
      <button onClick={props.onClose} className={classes.button}>Close</button>
     {hasItems && <button className={classes.button}>Order</button>}
    </Modal>
  );
}

export default Cart;
