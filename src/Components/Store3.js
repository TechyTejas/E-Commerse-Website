import React from "react";
import ListItem from "./ListItem";
import Card from "./Card";
import classes from './Store.module.css'
import {  useNavigate } from "react-router-dom";

const cartElements = [
  {
    id:"m1",
    title: "FireBoult Smart Watch",
    price: 1599,
    imageUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/o/w/y/-original-imagr4n4jurr92gv.jpeg?q=70",
    amount: 1,
  },

  {
    id:"m2",
    title: "DELL Keyboard & Mouse",
    price: 999,
    imageUrl: "https://rukminim2.flixcart.com/image/416/416/kmgn0cw0/computer-acc-combo/b/y/p/wired-keyboard-kb216-wired-optical-mouse-ms116-combo-zb-03-2-original-imagfcpqmb3r7vk8.jpeg?q=70",
    amount: 1,
  },

  {
    id:"m3",
    title: "boAt Bluetooth Earbuds",
    price: 1999,
    imageUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/t/j/u/-original-imagqre8hcncxaxk.jpeg?q=70",
    amount: 1,
  },
  {
      id:"m4",
      title: 'JBL Bluetooth Home Theater',
      price: 2499,
      imageUrl: 'https://m.media-amazon.com/images/I/51jjnFD7-pL._SX466_.jpg',
      amount:1
  },
  {
    id:"m5",
    title: 'Nikon Z50 Mirrorless Camera',
    price: 35299,
    imageUrl: 'https://m.media-amazon.com/images/I/614kzkELwmL._SY450_.jpg',
    amount:1
  },
  {
    id:"m6",
    title: 'Iphone 14 Plus',
    price: 52499,
    imageUrl: 'https://m.media-amazon.com/images/I/61BGE6iu4AL._SX679_.jpg',
    amount:1
  }

];

function Store3() {
  const mealitems = cartElements.map((item) => (
    <ListItem
      key={item.id}
      id={item.id}
      title={item.title}
      url={item.imageUrl}
      price={item.price}
      item={item}
    />
  ));

  const navigate=useNavigate();

  const PreviousPageHandler = () => {
      navigate("/store/Women")
  }
   
  return (
    <>
    <Card>
      <section>
        <h2 className={classes.mainheading}>Electronics </h2>
        <div className={classes.toppest}>{mealitems}</div>
      </section>
    </Card>
    <div className={classes.direction}>
        
    <button onClick={PreviousPageHandler} className={classes.button} style={{marginLeft:'10px'}}>Previous</button>
    <span>3</span>
    </div>
    
    </>
  );
}

export default Store3;
