import React from "react";
import classes from "./Store.module.css";
import ListItem from "./ListItem";

const cartElements = [

  {
  title: 'Colors',
  price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  quantity: 2,
  },
  
  {
  title: 'Black & white Colors',
    price: 50,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  quantity: 3,
  },
  
  {
  title: 'Yellow & Black Colors',
  price: 70,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  quantity: 1,
  }
  ]
  
  

function Store() {
  const mealslist = cartElements.map((item)=>
      <ListItem
          key={item.id}
          id={item.id}
          title={item.title}
          url={item.imageUrl}
          price={item.price}
      />)
  return (
    <section>
      <h2 className={classes.mainheading}>Music</h2>
      <div className={classes.toppest}>{mealslist}</div>
    </section>
  );
}

export default Store;
