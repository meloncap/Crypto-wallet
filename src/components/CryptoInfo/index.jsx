import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Chart from "../Chart";
import Loading from "../Loading";
import ModalAddContent from "../ModalAddContent";
import Modal from "../Modal";

import {
  getCryptoHistory,
  getSelectedCryptoFromApi,
  changeSelectedCryptoErrorState,
} from "../../redux/actions/cryptoDataAction";
import { getWallet } from "../../redux/actions/walletAction";
import "./styles.scss";

const CryptoInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { crypto } = useParams();

  const [modalVisible, setModalVisible] = useState(false);
  const selectedCrypto = useSelector((state) => state.crypto.selectedCrypto);
  const cryptoHistory = useSelector((state) => state.crypto.cryptoHistory);
  const selectedCryptoError = useSelector(
    (state) => state.crypto.selectedCryptoError
  );

  useEffect(() => {
    dispatch(getSelectedCryptoFromApi(crypto));
    dispatch(getCryptoHistory(crypto));
    dispatch(getWallet());
  }, [crypto, dispatch]);

  useEffect(() => {
    if (selectedCryptoError === true) {
      dispatch(changeSelectedCryptoErrorState(false));
      navigate(`/404`);
    }
  }, [selectedCryptoError, navigate]);

  const modalOpen = (e) => {
    e.stopPropagation();
    setModalVisible(true);
  };
  return (
    <>
      {Object.keys(selectedCrypto)?.length === 0 ? (
        <Loading />
      ) : (
        <>
          <div className="crypto-info">
            <div className="wrapper-flex">
              <div className="wrapper-flex__row">
                <a
                  href={selectedCrypto.explorer}
                  className="crypto-info__link "
                >
                  <img
                    className="crypto-logo"
                    alt="currency logo"
                    src={`https://assets.coincap.io/assets/icons/${selectedCrypto.symbol}@2x.png`}
                  />
                  <h1 className="crypto-info__title">{selectedCrypto.name}</h1>
                </a>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="button-add"
                  onClick={(e) => {
                    modalOpen(e);
                  }}
                />
              </div>

              <h2 className="crypto-info__usd">${selectedCrypto.priceUsd}</h2>
              {cryptoHistory?.length > 0 ? (
                <Chart data={cryptoHistory} />
              ) : (
                <Loading />
              )}
            </div>
            <div className="crypto-info__price price">
              <div className="price__block">
                <span className="price__block__name">MARKET CAP USD</span>
                <span className="price__block__usd">
                  $ {selectedCrypto.marketCapUsd}b
                </span>
              </div>
              <div className="price__block">
                <span className="price__block__name">VWAP 24HR</span>
                <span className="price__block__usd">
                  ${selectedCrypto.vwap24Hr}
                </span>
              </div>
              <div className="price__block">
                <span className="price__block__name">VOLUME USD 24 HR</span>
                <span className="price__block__usd">
                  ${selectedCrypto.volumeUsd24Hr}b
                </span>
              </div>
              <div className="price__block">
                <span className="price__block__name">CHANGE PERCENT 24 HR</span>
                <span className="price__block__usd">
                  {selectedCrypto.changePercent24Hr} %
                </span>
              </div>
            </div>
          </div>
          <Modal visible={modalVisible} setVisible={setModalVisible}>
            <ModalAddContent
              cryptoSelected={selectedCrypto}
              setModalVisible={setModalVisible}
            />
          </Modal>
        </>
      )}
    </>
  );
};

export default CryptoInfo;
