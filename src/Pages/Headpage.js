 

import Carousel from "react-bootstrap/Carousel";


function Headpage() {
  return (
     <div style={{marginTop:'50px'}}>

      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://images.unsplash.com/photo-1477901492169-d59e6428fc90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 style={{color:'black'}}>Trendy Men's Fashion</h2>
          <p style={{color:'black'}}><h4> Discover the latest trends and styles in men's clothing, from casual wear to formal attire, and elevate your fashion game.</h4></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1534459905198-35d70a2d9370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2 style={{color:'black'}}>Cutting-Edge Electronics</h2>
          <p style={{color:'black'}}>
            <h4>Explore our wide range of cutting-edge electronics, including smartphones, laptops, gadgets, and accessories.</h4></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{color:'black'}}>Fashionable Women's Apparel</h3>
          <p style={{color:'black'}}><h4>
          Step into a world of fashion with our collection of women's clothing, featuring elegant dresses, stylish tops, comfortable activewear, and more.
          </h4></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
      </div>
  );
}

export default Headpage;
