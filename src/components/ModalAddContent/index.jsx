import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { addCrypto } from "../../redux/actions/walletAction";

const ModalAddContent = ({ cryptoSelected, setModalVisible }) => {
  const dispatch = useDispatch();

  const [cryptoAmount, setCryptoAmount] = useState(1);
  const handleAdd = () => {
    dispatch(
      addCrypto(cryptoSelected.name, cryptoAmount, cryptoSelected.priceUsd)
    );
    setModalVisible(false);
    setCryptoAmount(1);
  };

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
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
          e.stopPropagation();
        }}
      ></input>
      <button onClick={(e) => e.preventDefault()} className="button">
        <FontAwesomeIcon
          icon={faPlus}
          className="button-add"
          onClick={handleAdd}
        />
      </button>
    </>
  );
};

export default ModalAddContent;
