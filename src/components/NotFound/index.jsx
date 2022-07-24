import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa4, fa0 } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

const NotFound = () => {
  return (
    <div className="wrapper__not-found">
      <div className="wrapper__not-found-flex">
        <FontAwesomeIcon icon={fa4} className="icon-number" />
        <FontAwesomeIcon icon={fa0} className="icon-number" />
        <FontAwesomeIcon icon={fa4} className="icon-number" />
      </div>

      <h1 className="title">Page not found</h1>
      <Link className="link-home" to={"/"}>
        Go home
      </Link>
    </div>
  );
};

export default NotFound;
