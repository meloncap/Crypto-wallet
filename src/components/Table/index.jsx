import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Loading from "../Loading";
import Pagination from "./Pagination";
import { getCrypto } from "../../redux/actions/cryptoDataAction";
import { formatNumber } from "../../services";
import "./styles.scss";
import Modal from "../Modal";

const Table = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [cryptoAmount, setCryptoAmount] = useState(1);
  const [cryptoSelected, setCryptoSelected] = useState();

  const crypto = useSelector((state) => state.crypto.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCrypto());
  }, [dispatch]);

  const addCryptoToWallet = (cryptoName, cryptoAmount) => {
    //TODO localStorage wallet logic
    //console.log(cryptoName, cryptoAmount);
    //let cryptoWallet = JSON.parse(localStorage.getItem("crypto"));
  };

  let [currentPage, setCurrentPage] = useState(1);
  const cryptoPerPage = 9;

  let indexOfLastCryptos = currentPage * cryptoPerPage;
  let indexOfFirstCryptos = indexOfLastCryptos - cryptoPerPage;
  let currentCryptos = crypto.slice(indexOfFirstCryptos, indexOfLastCryptos);
  let paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {crypto?.length === 0 ? (
        <Loading />
      ) : (
        <>
          <Modal visible={modalVisible} setVisible={setModalVisible}>
            Add to your own wallet
            <input
              type="number"
              min="1"
              placeholder="Enter amount"
              className="modal__input"
              value={cryptoAmount}
              onChange={(e) => setCryptoAmount(e.target.value)}
            ></input>
            <FontAwesomeIcon
              icon={faPlus}
              className="button-add"
              onClick={() => addCryptoToWallet(cryptoSelected, cryptoAmount)}
            />
          </Modal>
          <section className="crypto-table">
            <main className="crypto-table__row crypto-table__header">
              <ul className="crypto-table__list">
                <li className="crypto-table__list-item">Rank</li>
                <li className="crypto-table__list-item">Name </li>
                <li className="crypto-table__list-item">Price</li>
                <li className="crypto-table__list-item crypto-table__list-item-hide">
                  Market Cap
                </li>
                <li className="crypto-table__list-item crypto-table__list-item-hide">
                  VWAP (24Hr)
                </li>
                <li className="crypto-table__list-item crypto-table__list-item-hide">
                  Supply
                </li>
                <li className="crypto-table__list-item crypto-table__list-item-hide-phone">
                  Volume(24Hr)
                </li>
                <li className="crypto-table__list-item crypto-table__list-item-hide-phone">
                  Change(24Hr)
                </li>
                <li className="crypto-table__list-item">Add</li>
              </ul>
            </main>
            {currentCryptos.map((item) => {
              return (
                <section className="crypto-table" key={item.rank}>
                  <article className="crypto-table__row crypto-table__row-border">
                    <ul className="crypto-table__list">
                      <li className="crypto-table__list-item">{item.rank}</li>
                      <li className="crypto-table__list-item">
                        <a
                          href={item.explorer}
                          className="crypto__link-explorer"
                        >
                          <img
                            className="crypto__logo"
                            alt="currency logo"
                            src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
                          />
                          <span>{item.name}</span>
                        </a>
                      </li>
                      <li className="crypto-table__list-item">{`$ ${formatNumber(
                        item.priceUsd
                      )}`}</li>
                      <li className="crypto-table__list-item crypto-table__list-item-hide">{`$ ${formatNumber(
                        item.marketCapUsd,
                        9
                      )}b`}</li>
                      <li className="crypto-table__list-item crypto-table__list-item-hide">{`$ ${formatNumber(
                        item.vwap24Hr
                      )}`}</li>
                      <li className="crypto-table__list-item crypto-table__list-item-hide">{` ${formatNumber(
                        item.supply,
                        6
                      )}m`}</li>
                      <li className="crypto-table__list-item crypto-table__list-item-hide-phone">{`$ ${formatNumber(
                        item.volumeUsd24Hr,
                        9
                      )}b`}</li>
                      <li className="crypto-table__list-item crypto-table__list-item-hide-phone">{` ${formatNumber(
                        item.changePercent24Hr
                      )}%`}</li>
                      <li className="crypto-table__list-item">
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="button-add"
                          onClick={() => {
                            setModalVisible(true);
                            setCryptoSelected(item.name);
                          }}
                        />
                      </li>
                    </ul>
                  </article>
                </section>
              );
            })}
            <Pagination
              cryptoPerPage={cryptoPerPage}
              totalPosts={crypto.length}
              paginate={paginate}
            />
          </section>
        </>
      )}
    </>
  );
};

export default Table;
