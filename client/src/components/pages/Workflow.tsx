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
      <div className="container">
        <div className="workflow-section">
          <h2>WorkFlow</h2>
        </div>
        <div className="experiment-details">
          <h2>Guidelines</h2>
        </div>
      </div>
    </WorkFlowWrapper>
  );
};
