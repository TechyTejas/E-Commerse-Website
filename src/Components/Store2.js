import React from "react";
import ListItem from "./ListItem";
import Card from "./Card";
import classes from './Store.module.css'
import { useNavigate } from "react-router-dom";

const cartElements = [
  {
    id:"m1",
    title: "Butterfly Sleeves Floral Top",
    price: 399,
    imageUrl: "https://rukminim2.flixcart.com/image/612/612/k5h2jrk0/top/e/z/s/xl-mt227-oomph-original-imafz5jyfvsdshdk.jpeg?q=70",
    amount: 1,
  },

  {
    id:"m2",
    title: "Sleeves Women Maroon Top",
    price: 449,
    imageUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/f/n/4/s-581-589-zeny-enterprise-original-imaghqy3ry9skaa8.jpeg?q=70",
    amount: 1,
  },

  {
    id:"m3",
    title: "Women Light Green Top",
    price: 599,
    imageUrl: "https://rukminim2.flixcart.com/image/832/832/kx6fwcw0/top/r/d/p/xl-lerek413-xl-rewaa-original-imag9p7nrpchdxyd.jpeg?q=70",
    amount: 1,
  },
  {
      id:"m4",
      title: 'Puff Sleeves Orange Top',
      price: 399,
      imageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/top/e/y/a/m-cotton-western-wear-top-for-womens-girls-ladies-printed-original-imaghdzyzmbp7tyg.jpeg?q=70',
      amount:1
  },
  {
    id:"m5",
    title: "Sleeves Solid  Black Top",
    price: 399,
    imageUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/z/b/g/l-ls-1-imsa-moda-original-imagqjkhagzsheuf.jpeg?q=70",
    amount:1
  },
  {
    id:"m6",
    title: 'Women Solid Denim Jacket',
    price: 549,
    imageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/v/h/z/xl-sys-4174-funday-fashion-original-imafp8s5xvdkzwbc-bb.jpeg?q=70',
    amount:1
  }

];

function Store2() {
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

  const NextpageHandler = () =>{
    navigate("/store/electronics");
  }

  const PreviousPageHandler = () => {
    navigate("/store")
  }   
  return (
    <>
    <Card>
      <section>
        <h2 className={classes.mainheading}>Women's Clothing</h2>
        <div className={classes.toppest}>{mealitems}</div>
      </section>
    </Card>
    <div className={classes.direction}>
    <button onClick={PreviousPageHandler} className={classes.button}>Previous</button>
    <span>2</span>
    <button onClick={NextpageHandler} className={classes.button} style={{marginLeft:'10px'}}>Next</button>
    </div>
    </>
  );
}

export default Store2;
