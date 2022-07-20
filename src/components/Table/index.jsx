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

const Table = () => {
  const crypto = useSelector((state) => state.crypto.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCrypto());
  }, [dispatch]);

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
        <section className="section">
          <main className="section__row section__row__title">
            <ul className="section__ul">
              <li className="section__ul__li">Rank</li>
              <li className="section__ul__li">Name </li>
              <li className="section__ul__li">Price</li>
              <li className="section__ul__li section__ul__li-hide">
                Market Cap
              </li>
              <li className="section__ul__li section__ul__li-hide">
                VWAP (24Hr)
              </li>
              <li className="section__ul__li section__ul__li-hide">Supply</li>
              <li className="section__ul__li section__ul__li-hide-phone">
                Volume(24Hr)
              </li>
              <li className="section__ul__li section__ul__li-hide-phone">
                Change(24Hr)
              </li>
              <li className="section__ul__li">Add</li>
            </ul>
          </main>
          {currentCryptos.map((item) => {
            return (
              <section className="section" key={item.rank}>
                <article className="section__row section__row__border_left">
                  <ul className="section__ul">
                    <li className="section__ul__li">{item.rank}</li>
                    <li className="section__ul__li">
                      <a href={item.explorer} className="section__ul__li__a">
                        <img
                          className="section__ul__li__a__img"
                          alt="currency logo"
                          src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
                        />
                        {item.name}
                      </a>
                    </li>
                    <li className="section__ul__li">{`$ ${formatNumber(
                      item.priceUsd
                    )}`}</li>
                    <li className="section__ul__li section__ul__li-hide">{`$ ${formatNumber(
                      item.marketCapUsd,
                      9
                    )}b`}</li>
                    <li className="section__ul__li section__ul__li-hide">{`$ ${formatNumber(
                      item.vwap24Hr
                    )}`}</li>
                    <li className="section__ul__li section__ul__li-hide">{` ${formatNumber(
                      item.supply,
                      6
                    )}m`}</li>
                    <li className="section__ul__li section__ul__li-hide-phone">{`$ ${formatNumber(
                      item.volumeUsd24Hr,
                      9
                    )}b`}</li>
                    <li className="section__ul__li section__ul__li-hide-phone">{` ${formatNumber(
                      item.changePercent24Hr
                    )}%`}</li>
                    <li className="section__ul__li">
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="section__ul__li__button-add"
                        onClick={() => console.log(item.id)}
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
      )}
    </>
  );
};

export default Table;
