import React,{useRef} from 'react'
import classes from './contactus.module.css'

function ContactUs() {
    const nameref = useRef('');
    const emailref = useRef('');
    const numref = useRef('');

   async function FormSubmitHandler (event) {
       event.preventDefault();
        const details= {
            name : nameref.current.value,
            email : emailref.current.value,
            number : numref.current.value
        } 
        // console.log(details)

        const response =await fetch('https://ecommerse-contactus-default-rtdb.firebaseio.com/contactus.json',
        {
            method:'POST',
            body: JSON.stringify(details),
        })

        // const data=await response.json();
        // console.log(data);   //  checking weather data is goingto server or not 

        nameref.current.value="";
        emailref.current.value="";
        numref.current.value="";
    }

  return (
    <div className={classes.griddiv}>
        <div className={classes.para}>
            <h3>Don't be a stranger!</h3>
            <h1>You tell us. We listen.</h1>
            <p>You tell us, we listen. Your feedback fuels our growth. Together, we shape remarkable experiences. Let's build a brighter future, hand in hand.</p>
        </div>

    <div className={classes.maindiv}>
        <lable><h2>Contact us </h2></lable>
         <form onSubmit={FormSubmitHandler}>
        <div>
            <label>Enter your name</label>
            <br/>
            <input type="text" ref={nameref} className={classes.input} ></input> 
            <br/>
        </div>

        <div>
            <label>Enter your email</label>
            <br/>
            <input type="email" ref={emailref} className={classes.input} ></input> 
            <br/>
        </div>

        <div>
            <label>Enter your phone number</label>
            <br/>
            <input type="number" ref={numref} className={classes.input} ></input> 
            <br/>
        </div>

        <div>
            <label>Message</label>
            <br/>
            <input type="text" className={classes.inputt}  ></input> 
            <br/>
        </div>

        <div>
            <button type="submit" className={classes.button}>Submit</button>
        </div>   
    </form>
    </div>
    </div>
   
  )
}

export default ContactUs