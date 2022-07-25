import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const TableRow = ({ crypto, modalOpen }) => {
  let navigate = useNavigate();

  const onNavigate = () => {
    navigate(`/${crypto.id}`);
  };

  return (
    <section className="crypto-table" key={crypto.rank}>
      <article
        className="crypto-table__row crypto-table__row-border"
        onClick={onNavigate}
      >
        <ul className="crypto-table__list">
          <li className="crypto-table__list-item">{crypto.rank}</li>
          <li className="crypto-table__list-item">
            <a href={crypto.explorer} className="crypto__link-explorer">
              <img
                className="crypto__logo"
                alt="currency logo"
                src={`https://assets.coincap.io/assets/icons/${crypto.symbol}@2x.png`}
              />
              <span>{crypto.name}</span>
            </a>
          </li>
          <li className="crypto-table__list-item">{`$ ${crypto.priceUsd}`}</li>
          <li className="crypto-table__list-item crypto-table__list-item-hide">{`$ ${crypto.marketCapUsd}b`}</li>
          <li className="crypto-table__list-item crypto-table__list-item-hide">{`$ ${crypto.vwap24Hr}`}</li>
          <li className="crypto-table__list-item crypto-table__list-item-hide">{` ${crypto.supply}m`}</li>
          <li className="crypto-table__list-item crypto-table__list-item-hide-phone">{`$ ${crypto.volumeUsd24Hr}b`}</li>
          <li className="crypto-table__list-item crypto-table__list-item-hide-phone">{` ${crypto.changePercent24Hr}%`}</li>
          <li className="crypto-table__list-item">
            <FontAwesomeIcon
              icon={faPlus}
              className="button-add"
              onClick={(e) => {
                e.stopPropagation();
                modalOpen(crypto);
              }}
            />
          </li>
        </ul>
      </article>
    </section>
  );
};

export default TableRow;
