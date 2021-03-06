import React from 'react'

export const Modal = (props) => {
    const handleClose = () => {
        props.setModaltoggle(false)
    }
    return(
        <div className={props.class ? "modal-active" : "modal"}  onClick={handleClose} ><img src={props.id} alt="img" />
        <span className="close-modal">X</span></div>
    )
}

export default Modal