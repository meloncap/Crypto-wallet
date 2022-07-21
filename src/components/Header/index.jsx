import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";
import Loading from "../Loading";
import { getWallet } from "../../redux/actions/walletAction";
import { removeCrypto } from "../../redux/actions/walletAction";

import "./styles.scss";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [cryptoInWallet, setCryptoInWallet] = useState();

  const wallet = useSelector((state) => state.wallet.wallet);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWallet());
  }, []);

  useEffect(() => {
    setCryptoInWallet(wallet);
  }, [wallet]);

  return (
    <header className="wrapper">
      <div className="header">
        <FontAwesomeIcon
          icon={faWallet}
          className="header__wallet"
          onClick={() => setModalVisible(!modalVisible)}
        />
      </div>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        {cryptoInWallet === undefined && <Loading />}
        {cryptoInWallet && Object.keys(cryptoInWallet).length > 0 ? (
          <>
            <div className="crypto-wallet-caption">
              <p>Your wallet </p>
              <FontAwesomeIcon icon={faWallet} className="wallet-icon" />
            </div>

            <ul className="crypto-wallet-list">
              {Object.keys(cryptoInWallet).map((cryptoName) => {
                return (
                  <li key={cryptoName} className="crypto-wallet-list__item">
                    {cryptoName}: {cryptoInWallet[cryptoName]}
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="remove-button"
                      onClick={() => dispatch(removeCrypto(cryptoName))}
                    />
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <div>Your wallet is empty{}</div>
        )}
      </Modal>
    </header>
  );
};

export default Header;
