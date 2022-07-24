import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { addCrypto } from "../../redux/actions/walletAction";

const ModalAddContent = ({ cryptoSelected, setModalVisible }) => {
  const dispatch = useDispatch();

  const [cryptoAmount, setCryptoAmount] = useState(1);

  return (
    <>
      Add to your own wallet
      <input
        type="number"
        min="1"
        placeholder="Enter amount"
        className="modal__input"
        value={cryptoAmount}
        onChange={(e) => {
          setCryptoAmount(e.target.value);
          e.stopPropagation();
        }}
      ></input>
      <FontAwesomeIcon
        icon={faPlus}
        className="button-add"
        onClick={() => {
          dispatch(addCrypto(cryptoSelected, cryptoAmount));
          setModalVisible(false);
          setCryptoAmount(1);
        }}
      />
    </>
  );
};

export default ModalAddContent;
