import { useContext, useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import styled from "styled-components";
import { WorkflowContext } from "../../App";
import { getNodeId, handleStyle1, handleStyle2 } from "../../utils";

export const Decision = ({ data }: any) => {
  const context: any = useContext(WorkflowContext);
  const [id, _] = useState(getNodeId("procedure"));

  return (
    <>
      <DecisionWrapper>
        <Handle
          type="target"
          position={Position.Top}
          className="move-left"
          style={handleStyle2}
          id="rhombus-a"
        />
        <div>
          <input
            id={id}
            name={id}
            type="text"
            onChange={context.handleChange}
          />
        </div>

        <Handle
          type="source"
          position={Position.Right}
          id="rhombus-b"
          className="move-top"
          style={handleStyle1}
        />

        <Handle
          type="source"
          position={Position.Bottom}
          id="rhombus-c"
          className="move-right"
          style={handleStyle1}
        />
      </DecisionWrapper>
      <div style={{ marginTop: "15px" }}>
        {context.store.procedures[id] && (
          <div>{context.store.procedures[id]}</div>
        )}
      </div>
    </>
  );
};

const DecisionWrapper = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  transform: rotate(47.5deg);

  padding: 3px;
  border-radius: 2px;
  background: #eb8d90;
  position: relative;

  label {
    display: block;
    color: green;
    font-size: 8px;
    transform: rotate(-47.5deg);
  }
  input {
    font-size: 10px;
    transform: rotate(-47.5deg);
    border: 0;
    margin-top: -15px;
    width: 4rem;
    height: 2rem;
    position: absolute;
    top: 2.7rem;
    outline: none;
    text-align: center;
  }
  .move-left {
    left: 0;
  }
  .move-top {
    top: 0px;
  }
  .move-right {
    left: 50px;
  }
`;
