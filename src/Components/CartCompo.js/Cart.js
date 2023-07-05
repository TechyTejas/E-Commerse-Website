import { useEffect, useState } from "react";
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
      `https://crudcrud.com/api/e579ee97e42947bcb032414cfd735149/${updatedEmail}/${id}`
    );
    await fetchCartItems();
  }

  async function fetchCartItems() {
    const response = await axios.get(
      `https://crudcrud.com/api/e579ee97e42947bcb032414cfd735149/${updatedEmail}`
    );
    console.log(response.data);
    console.log("tejas in server getting data");

    const cartItems = response.data.map((item) => ({
      id: item._id,
      title: item.title,
      amount: item.amount,
      price: item.price
    }));
    setCartitems(cartItems);
  }

  // Calculate the total amount
  const totalAmount = cartitems.reduce(
    (total, item) => total + item.amount * item.price,
    0
  );
  
  const hasItems = cartitems.length > 0;

  return (
    <Modal onClose={props.onClose}>
      {cartitems.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
      <div>
        <span>Total Amount</span>
        <span>₹{totalAmount}</span>
      </div>
      <button onClick={props.onClose}>Close</button>
     {hasItems && <button>Order</button>}
    </Modal>
  );
}

export default Cart;
