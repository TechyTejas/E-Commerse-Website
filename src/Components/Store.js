import React from "react";
import ListItem from "./ListItem";
import Card from "./Card";
import classes from './Store.module.css'

const cartElements = [
  {
    id:"m1",
    title: "Striped Casual Shirt",
    price: 399,
    imageUrl: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/g/m/0/m-sh-black-line-u-turn-original-imagmuf9fmx8gg9z.jpeg?q=70",
    amount: 1,
  },

  {
    id:"m2",
    title: "Checks Casual Shirt",
    price: 449,
    imageUrl: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/7/b/j/-original-imagz85ywkt4yehr.jpeg?q=70",
    amount: 1,
  },

  {
    id:"m3",
    title: "Formal shirt",
    price: 599,
    imageUrl: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/j/o/i/3xl-13-lstr-pink-vtexx-original-imagnxazbbqf3jym.jpeg?q=70",
    amount: 1,
  },
  {
      id:"m4",
      title: 'Printed Design Shirt',
      price: 299,
      imageUrl: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/g/h/t/m-white-line-u-turn-original-imaghey9b9bws9qz.jpeg?q=70',
      amount:1
  },
  {
    id:"m5",
    title: 'Cool Blue College Shirt',
    price: 399,
    imageUrl: 'https://rukminim1.flixcart.com/image/832/832/kxhvf680/shirt/2/3/s/s-blue1-provada-original-imag9xnuzqqz7g6h.jpeg?q=70',
    amount:1
  },
  {
    id:"m6",
    title: 'Boxxy Over Size Shirt',
    price: 349,
    imageUrl: 'https://rukminim1.flixcart.com/image/832/832/l4n2oi80/shirt/h/q/y/l-dbm-s-brown-brothers-original-imagfgyyecznj5xc.jpeg?q=70',
    amount:1
  }

];

function Store() {
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
   
  return (
    <Card>
      <section>
        <h2 className={classes.mainheading}>Men's Clothing</h2>
        <div className={classes.toppest}>{mealitems}</div>
      </section>
    </Card>
  );
}

export default Store;
