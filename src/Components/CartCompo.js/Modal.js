import React,{Fragment} from 'react'
import ReactDom from 'react-dom'
import classes from './Modal.module.css'


const Backdrop = (props) => {
      return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const Modaloverlay = (props) => { 
      return <div className={classes.modal}>
        <div className={classes.npmcontent}>{props.children}</div>
      </div>
}

const portalElement = document.getElementById('modal');
function Modal(props) {
  return (
    <Fragment>
       {ReactDom.createPortal (<Backdrop onClose={props.onClose}/>,portalElement)}
       {ReactDom.createPortal(<Modaloverlay>{props.children}</Modaloverlay>,portalElement)}

    </Fragment>
     
  )
}

export default Modal