import React from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { WorkFlowWrapper } from "../../styles/WorkFlow.style";

export const WorkFlow = () => {
  return (
    <WorkFlowWrapper>
      <Link className="back-button" to="/">
        <FaAngleLeft />
      </Link>
    </WorkFlowWrapper>
  );
};
