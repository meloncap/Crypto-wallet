import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const Modal = ({ children, visible, setVisible }) => {
  const overlayRef = useRef();

  const overlayClick = (e) => {
    e.stopPropagation();
    if (e.target === overlayRef.current) setVisible(false);
  };

  return (
    <div
      ref={overlayRef}
      className={visible ? "modal modal-visible" : "modal"}
      onClick={overlayClick}
    >
      <div className="modal__content">
        <FontAwesomeIcon
          icon={faClose}
          className="close-icon"
          onClick={() => setVisible(false)}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
