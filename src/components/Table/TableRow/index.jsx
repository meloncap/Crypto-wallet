import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { formatNumber } from "../../../services";

const TableRow = ({ item, modalOpen }) => {
  return (
    <section className="crypto-table" key={item.rank}>
      <article className="crypto-table__row crypto-table__row-border">
        <ul className="crypto-table__list">
          <li className="crypto-table__list-item">{item.rank}</li>
          <li className="crypto-table__list-item">
            <a href={item.explorer} className="crypto__link-explorer">
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
              onClick={() => modalOpen(item.name)}
            />
          </li>
        </ul>
      </article>
    </section>
  );
};

export default TableRow;
