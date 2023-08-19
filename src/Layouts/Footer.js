import React from 'react'
import classes from './footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate=useNavigate();
  const navigateHandler = () => {
       navigate('/store')
  }

  const navigateWomen = () => {
       navigate('/store/Women')
  }
  
  const navigateEle = () => {
       navigate('/store/electronics')
  }
  return (
    <div className={classes.divstyle}>
    <footer >
    {/* <div className={classes.footer2}> Footer Part </div> */}
    <div className={classes.footer}>
      <ol className={classes.li}>
      <h2 style={{color:"black"}}>Shop</h2>
        <li onClick={navigateHandler}>Men's Clothing</li>
        <li onClick={navigateWomen}>Women's Clothing</li>
        <li onClick={navigateEle}>Electronics</li>
        <li onClick={navigateEle}>Mobiles & Watches</li>
      </ol>
      
      <ol  className={classes.li}>
        <h2 style={{color:"black"}}>About</h2>
        <li><Link to="/about" className={classes.lili}>About</Link></li>
        <li><Link to='/contact' className={classes.lili}>Contact Us</Link></li>
        <li><Link to='/privacypolicy' className={classes.lili}>Privacy Policy</Link></li>
        <li><Link to='/term&condition' className={classes.lili}>Terms and Conditions</Link></li>
      </ol>
      
      <div>
     
      <ui className={classes.footerIconsUL}>
       
        <li className={classes.footerIconsLI}>
            <a href='https://www.facebook.com' className={classes.achor }>
            <InstagramIcon style={{color:"purple"}}/>
            </a> 
        </li>

        <li className={classes.footerIconsLI}>
            <a href='https://www.youtube.com/' className={classes.achor }>
            <YouTubeIcon style={{color:"red"}}/>
            </a>
         </li>

        <li className={classes.footerIconsLI}>
            <a href='https://www.spotify.com' className={classes.achor }>
            <TwitterIcon style={{color:"blue"}}/>
            </a> 
        </li>

      </ui>
      </div>
    </div>
   

  </footer>
  Tejas Sadade 2023 All Rights are reserved..
      </div>
  )
}

export default Footer