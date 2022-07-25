import React from "react";
import "./styles.scss";

const Pagination = ({ cryptoPerPage, totalPosts, paginate, currentPage }) => {
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
          className={
            currentPage === number
              ? "pagination-list__item-highlited pagination-list__item"
              : "pagination-list__item"
          }
        >
          {number}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
