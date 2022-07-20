import React from "react";
import "./styles.scss";

const Pagination = ({ cryptoPerPage, totalPosts, paginate }) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / cryptoPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination-block">
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className="pagination-block__li"
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
