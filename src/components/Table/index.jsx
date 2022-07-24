import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import Pagination from "./Pagination";
import Modal from "../Modal";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import ModalAddContent from "../ModalAddContent";
import { getCryptoFromApi } from "../../redux/actions/cryptoDataAction";
import { formatCryptoData } from "../../services";

import "./styles.scss";

const Table = () => {
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [cryptoSelected, setCryptoSelected] = useState();

  const crypto = useSelector((state) => state.crypto.crypto);

  useEffect(() => {
    dispatch(getCryptoFromApi());
  }, [dispatch]);

  const modalOpen = (itemName) => {
    setModalVisible(true);
    setCryptoSelected(itemName);
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
            <ModalAddContent
              cryptoSelected={cryptoSelected}
              setModalVisible={setModalVisible}
            />
          </Modal>
          <section className="crypto-table">
            <TableHeader />
            {currentCryptos.map((item) => {
              return (
                <TableRow
                  crypto={formatCryptoData(item)}
                  modalOpen={modalOpen}
                  key={item.id}
                />
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
