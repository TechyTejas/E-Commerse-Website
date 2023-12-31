import { useState, useRef ,useContext} from 'react';
import { useNavigate } from 'react-router-dom'
import classes from './loginform.module.css'
import AuthContext from '../LoginStore/Auth-context';


const LoginForm = () => {
  
  const navigate= useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext)

  const [isLogin, setIsLogin] = useState(true);
  const[isLoading,setIsLoading]= useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
     console.log(enteredEmail, enteredPassword);

      //we pass email from here it is hard coded
    localStorage.setItem("email",enteredEmail)
    
    setIsLoading(true)
    let url;
    if (isLogin) {
      url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlQvUEbNbpMWjBBz1w5MrItqcWZgscivw"
    } else {
      url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBlQvUEbNbpMWjBBz1w5MrItqcWZgscivw"
    }
    fetch( url,
      {
        method: "POST",
        body: JSON.stringify({  //here we passing data
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      setIsLoading(false)
      if (response.ok) {
        return response.json();
      } else {
        //The response holds error
        return response.json().then((data) => {
          let errorMessage= 'Authentication failed!';

          //if(data && data.error && data.error.message){
          //   errorMessage=data.error.message;
          // }
          // alert(errorMessage)
          // console.log(data);
          throw new Error(errorMessage)
        })
      }
    })
    .then((data) => {
      authCtx.login(data.idToken)  //here we passing that token which we getting from firbase
      // console.log(data)
      navigate('/store');
    })
    .catch((err) => {
      alert(err.message)
    })

    emailInputRef.current.value="";
    passwordInputRef.current.value="";
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler} >
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email'ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={passwordInputRef}
            required
          />
        </div>
        <div className={classes.actions}>
        {!isLoading && <button >{isLogin ? "Login" : "Create Account"}</button>}
        {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
        {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};



export default LoginForm