import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import Modal from "../Modal";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="wrapper">
      <div className="header">
        <FontAwesomeIcon
          icon={faWallet}
          className="header__wallet"
          onClick={() => setModalVisible(!modalVisible)}
        />
      </div>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        hey
      </Modal>
    </div>
  );
};

export default Header;
