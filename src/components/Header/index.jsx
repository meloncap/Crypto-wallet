import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faTrash,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";
import Loading from "../Loading";
import { getWallet, setWalletPrice } from "../../redux/actions/walletAction";
import { removeCrypto } from "../../redux/actions/walletAction";

import "./styles.scss";
import { getCryptoFromApi } from "../../redux/actions/cryptoDataAction";
import { formatCryptoData } from "../../services";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modalVisible, setModalVisible] = useState(false);
  const [cryptoInWallet, setCryptoInWallet] = useState();

  const wallet = useSelector((state) => state.wallet.wallet);
  const price = useSelector((state) => state.wallet.wallet?.price);
  const previousPrice = useSelector(
    (state) => state.wallet.wallet?.previousPrice
  );

  const topCrypto = useSelector((state) => state.crypto.topCrypto);
  const crypto = useSelector((state) => state.crypto.crypto);

  useEffect(() => {
    dispatch(getCryptoFromApi());
    dispatch(getWallet());
  }, [dispatch]);

  useEffect(() => {
    setCryptoInWallet(wallet);
  }, [wallet]);

  const onNavigate = () => {
    navigate("/");
  };

  const handleRemoveClick = async (cryptoName) => {
    await dispatch(removeCrypto(cryptoName));
    dispatch(setWalletPrice(crypto, true));
  };
  return (
    <header className="wrapper">
      <div className="header">
        <FontAwesomeIcon
          icon={faCircleDollarToSlot}
          className="header__homepage"
          onClick={onNavigate}
        />
        {topCrypto?.length === 0 ? (
          <Loading />
        ) : (
          <ul className="crypto-top__list">
            {topCrypto.map((crypt) => {
              return (
                <li className="crypto-top__list-item" key={crypt.id}>
                  {crypt.name}:
                  <span className="crypto-top__list-item-colored">
                    {formatCryptoData(crypt).priceUsd}$
                  </span>
                </li>
              );
            })}
          </ul>
        )}
        <FontAwesomeIcon
          icon={faWallet}
          className="header__wallet"
          onClick={() => setModalVisible(!modalVisible)}
        />
        {price !== 0 && (
          <p className="cost-wallet">
            {price >= previousPrice
              ? `${+previousPrice?.toFixed(2)}$ +${+(
                  price - previousPrice
                ).toFixed(2)}$ ${+(
                  ((price - previousPrice) / price) *
                  100
                ).toFixed(2)}%`
              : `${+previousPrice?.toFixed(2)}$ -${+(
                  previousPrice - price
                ).toFixed(2)}$ ${+(
                  ((previousPrice - price) / price) *
                  100
                ).toFixed(2)}%`}
          </p>
        )}
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
                if (cryptoName === "price" || cryptoName === "previousPrice")
                  return;
                else {
                  return (
                    <li key={cryptoName} className="crypto-wallet-list__item">
                      {cryptoName}: {cryptoInWallet[cryptoName]}
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="remove-button"
                        onClick={() => {
                          handleRemoveClick(cryptoName);
                        }}
                      />
                    </li>
                  );
                }
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
