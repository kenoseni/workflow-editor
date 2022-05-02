import React from "react";
import { Link } from "react-router-dom";
import { WorkFlowsWrapper } from "../../styles/WorkFlows.style";

export const WorkFlows = () => {
  return (
    <WorkFlowsWrapper>
      <Link to={"/editor"}>
        <div className="button">Goto Workflow Editor</div>
      </Link>
    </WorkFlowsWrapper>
  );
};
