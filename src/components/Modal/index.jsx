import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const Modal = ({ children, visible, setVisible }) => {
  return (
    <div
      className={visible ? "modal modal-visible" : "modal"}
      onClick={() => setVisible(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
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
