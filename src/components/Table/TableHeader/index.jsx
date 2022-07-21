import React from "react";
import "../styles.scss";

const TableHeader = () => {
  return (
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
  );
};

export default TableHeader;
