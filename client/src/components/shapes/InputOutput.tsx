import { useContext, useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import styled from "styled-components";
import { WorkflowContext } from "../../App";
import { getNodeId, handleStyle1, handleStyle2 } from "../../utils";

export const InputOutput = () => {
  const context: any = useContext(WorkflowContext);
  const [id, _] = useState(getNodeId("procedure"));
  return (
    <>
      <InputOutputWrapper>
        <Handle
          type="target"
          id="para-a"
          position={Position.Left}
          style={handleStyle2}
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
          type="target"
          id="para-b"
          position={Position.Top}
          style={handleStyle2}
        />

        <Handle
          type="source"
          position={Position.Right}
          id="para-c"
          style={handleStyle1}
        />

        <Handle
          type="source"
          id="para-d"
          position={Position.Bottom}
          style={handleStyle1}
        />
      </InputOutputWrapper>
      <div style={{ width: "80%" }}>
        {context.store.procedures[id] && (
          <div>{context.store.procedures[id]}</div>
        )}
      </div>
    </>
  );
};

const InputOutputWrapper = styled.div`
  height: 50px;
  width: 100px;
  padding: 3px;
  display: inline-block;
  background: #ffe28e;
  border: 1px solid black;
  transform: skewX(-10deg);
  position: relative;

  label {
    display: block;
    color: red;
    font-size: 8px;
  }
  input {
    font-size: 10px;
    border: 0;
    margin-top: -15px;
    width: 6rem;
    height: 2rem;
    position: absolute;
    top: 2.7rem;
    left: 20px;
    outline: none;
    transform: skewX(10deg);
    text-align: center;
  }
`;
