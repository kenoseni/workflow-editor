import { Handle, Position } from "react-flow-renderer";
import styled from "styled-components";
import { handleStyle2 } from "../../utils";

export const End = () => {
  return (
    <EndWrapper>
      <Handle
        type="target"
        position={Position.Right}
        id="end"
        style={handleStyle2}
      />
      End
    </EndWrapper>
  );
};

const EndWrapper = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background-color: #e34637;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
  }
`;
