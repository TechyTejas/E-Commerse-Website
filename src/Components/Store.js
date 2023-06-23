import React from "react";
import classes from "./Store.module.css";

function Store() {
  return (
    <section>
      <h2 className={classes.mainheading}>Music</h2>
      <div className={classes.toppest}>
        <div className={classes.master}>
          <div className={classes.topdiv}>
            <h2 className={classes.heading}>Colors</h2>
            <div>
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                className={classes.images}
              />
            </div>
            <div className={classes.prodprice}>
              <span>100$</span>
              <button className={classes.btn}>Add to Cart</button>
            </div>
          </div>
        </div>

        <div className={classes.master}>
          <div className={classes.topdiv}>
            <h2 className={classes.heading}>Black and white Colors</h2>
            <div>
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
                className={classes.images}
              />
            </div>
            <div className={classes.prodprice}>
              <span>100$</span>
              <button className={classes.btn}>Add to Cart</button>
            </div>
          </div>
        </div>

        <div className={classes.master}>
          <div className={classes.topdiv}>
            <h2 className={classes.heading}>Yellow and Black Colors</h2>
            <div>
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
                className={classes.images}
              />
            </div>
            <div className={classes.prodprice}>
              <span>100$</span>
              <button className={classes.btn}>Add to Cart</button>
            </div>
          </div>
        </div>

        <div className={classes.master}>
          <div className={classes.topdiv}>
            <h2 className={classes.heading}>Blue Color</h2>
            <div>
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
                className={classes.images}
              />
            </div>
            <div className={classes.prodprice}>
              <span>100$</span>
              <button className={classes.btn}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Store;
