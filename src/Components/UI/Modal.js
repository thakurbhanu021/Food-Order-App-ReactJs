import  ReactDOM  from 'react-dom';

import classes from './Modal.module.css';
import { Fragment } from 'react';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>
};

const ModalOverlays = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClick = {props.onClick}/>,portalElement)}
        {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>,portalElement)}
    </Fragment>
};

export default Modal;