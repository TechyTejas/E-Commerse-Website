import React from 'react'
import classes from './Store.module.css'

function ListItem(props) {
    const url=props.url;
     
  return (
   
        <div className={classes.master}>
          <div className={classes.topdiv}>
            <h2 className={classes.heading}>{props.title}</h2>
            <div>
            <img src={url} className={classes.images} alt={props.url} />
            </div>
            <div className={classes.prodprice}>
              <span>{props.price}$</span>
              <button className={classes.btn}>Add to Cart</button>
            </div>
          </div>
        </div>
    
  )
}

export default ListItem