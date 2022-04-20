import React from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { useTitle } from "../../hooks/useTitle";
import { NotFoundWrapper } from "../../styles/NotFound.style";

export const NotFound = () => {
  useTitle("WorkFlow Editor | Not Found");
  return (
    <NotFoundWrapper>
      <h1>
        Not found <span>:(</span>
      </h1>
      <p>Sorry, the page you are trying to view does not exist</p>
      <i>404</i>
      <Link className="back-button" to="/">
        <FaAngleLeft />
      </Link>
    </NotFoundWrapper>
  );
};
