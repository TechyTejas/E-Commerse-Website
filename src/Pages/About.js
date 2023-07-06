import React from "react";
import classes from "./About.module.css";

function About() {
  return (
    <React.Fragment>
      <div className={classes.about}>
        <h2 className={classes.heading}>About us</h2>
        <div className={classes.inner}>
          <img
            src="https://www.angularminds.com/site_data/images/ecommerce-development/ecommerce-bg.png"
            className={classes.image}
          />
          <p className={classes.para}>
            Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
            sorrows, hates no prosecutors will unfold in the enduring of which
            were born in it? Often leads smallest mistake some pain main
            responsibilities are to stand for the right builder of pleasure,
            accepted explain up to now. , The things we are accusing of these in
            the explication of the truth receives from the flattery of her will
            never be the trouble and they are refused to the pleasures and the
            pleasures of the pain, explain the treatment of excepturi of the
            blessed sufferings. I never said will unfold in him receives at
            another time he may please the one that those works, we are less
            than they, this refused to the pleasures of deleniti? Those are!
            Will unfold in times of pleasure, this pain will be a right enjoyed
            by corrupt, are accusing him of all pleasures, and seek his own, or,
            to the needs of the agony of the choice. We hate the fellow. Lorem
            ipsum dolor, sit amet consectetur rebates. The distinction, that
            arise from or to. The greater, therefore, an obstacle to the duties
            of the debts receives the very great importance to us that these are
            consequent to that question is answered, which was selected for the
            fault, it is often one of us, however, have any! Moreover, this is
            often not at once take the hardships of the life of harsh condemn,
            we are accusing him? Him whom something large cisterns.
          </p>
        </div>
      </div>
      <h1 style={{ textAlign: "center", paddingTop: "50px" }}>WHY CHOOSE US...</h1>


      <section className={classes.section}>
  <div>
    <img
      src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/globe-free-img.png"
      className={classes.gridimg}
      alt="Worldwide Shipping"
    />
    <h3>Worldwide Shipping</h3>
    <p>
      Fast and reliable shipping services available worldwide.
    </p>
  </div>

  <div>
    <img
      src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/quality-free-img.png"
      className={classes.gridimg}
      alt="Best Quality"
    />
    <h3>Best Quality</h3>
    <p>
      High-quality products crafted with attention to detail.
    </p>
  </div>

  <div>
    <img
      src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/tag-free-img.png"
      className={classes.gridimg}
      alt="Best Offers"
    />
    <h3>Best Offers</h3>
    <p>
      Exciting discounts and exclusive offers available for a limited time.
    </p>
  </div>

  <div>
    <img
      src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/lock-free-img.png"
      className={classes.gridimg}
      alt="Secure Payments"
    />
    <h3>Secure Payments</h3>
    <p>
      Secure payment options to ensure your transactions are protected.
    </p>
  </div>
</section>

    </React.Fragment>
  );
}

export default About;
