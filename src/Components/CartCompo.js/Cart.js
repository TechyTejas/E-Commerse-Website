import { useContext } from 'react'
import Modal from './Modal'
import CartContext from '../Store/cart-context'
import CartItem from './CartItem'

function Cart(props) {
  const cartCtx = useContext(CartContext)
  // console.log(cartCtx,"from cart")

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length>0

  const cartItemRemoveHandler = (id) =>{
   cartCtx.removeItem(id);        
  }

  const cartItemAddHandler = (item) =>{
    cartCtx.addItem({...item,amount:1});   //add 1 quanity in portal
  }

  const cartItems =
  <ul>
    {cartCtx.items.map((item) => (
     
    <CartItem 
    key={item.id} 
    title={item.title} 
    amount={item.amount} 
    price={item.price}
    onRemove={cartItemRemoveHandler.bind(null,item.id)}
    onAdd={cartItemAddHandler.bind(null,item)}/>
    ))}
    </ul>

  return (
    <Modal onClose={props.onClose}>
       {cartItems}
        <div>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <button onClick={props.onClose}>Close</button>
        {hasItems && <button>Order</button>}
    </Modal>
  )
}

export default Cart