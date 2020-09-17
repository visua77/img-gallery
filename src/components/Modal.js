import React from 'react'

export const Modal = (props) => {
    const handleClose = () => {
        props.setModaltoggle(false)
    }
    return(
        <div className={props.class ? "modal-active" : "modal"}><img src={props.id} alt="img" />
        <span className="close-modal" onClick={handleClose}>X</span></div>
    )
}

export default Modal