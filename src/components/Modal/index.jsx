import React, { useCallback, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const Modal = ({ children, visible, setVisible }) => {
  const overlayRef = useRef();

  const overlayClick = (e) => {
    e.stopPropagation();
    if (e.target === overlayRef.current) setVisible(false);
  };

  const escFunction = (event) => {
    if (event.key === "Escape") {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <form
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
    </form>
  );
};

export default Modal;
