import React from "react";
import "./styles.scss";

const Pagination = ({ cryptoPerPage, totalPosts, paginate }) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / cryptoPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="pagination-list">
      {pageNumbers.map((number) => (
        <li
          key={number}
          onClick={() => paginate(number)}
          className="pagination-list__item"
        >
          {number}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
