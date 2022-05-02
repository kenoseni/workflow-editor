import { useContext, useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import styled from "styled-components";
import { WorkflowContext } from "../../App";
import { getNodeId, handleStyle1, handleStyle2 } from "../../utils";

export const Calculate = () => {
  const context: any = useContext(WorkflowContext);
  const [id, _] = useState(getNodeId("procedure"));

  return (
    <>
      <Wrapper>
        <Handle
          type="target"
          id="custom-a"
          position={Position.Right}
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
          id="custom-b"
          position={Position.Top}
          style={handleStyle2}
        />

        <Handle
          type="source"
          position={Position.Left}
          id="custom-c"
          style={handleStyle1}
        />
      </Wrapper>
      <div>
        {context.store.procedures[id] && (
          <div>{context.store.procedures[id]}</div>
        )}
      </div>
    </>
  );
};

const Wrapper = styled.div`
  height: 50px;
  width: 100px;
  border: 1px solid #000;
  padding: 3px;
  border-radius: 2px;
  background: #07b3f7;
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
    text-align: center;
  }
`;
