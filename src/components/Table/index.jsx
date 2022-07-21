import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Loading from "../Loading";
import Pagination from "./Pagination";
import { getCrypto } from "../../redux/actions/cryptoDataAction";
import "./styles.scss";
import Modal from "../Modal";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [cryptoAmount, setCryptoAmount] = useState(1);
  const [cryptoSelected, setCryptoSelected] = useState();

  const crypto = useSelector((state) => state.crypto.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCrypto());
  }, [dispatch]);

  const modalOpen = (item) => {
    setModalVisible(true);
    setCryptoSelected(item.name);
  };

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
            <TableHeader />
            {currentCryptos.map((item) => {
              return <TableRow item={item} modalOpen={modalOpen} />;
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
