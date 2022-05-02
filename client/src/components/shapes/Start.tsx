import { Handle, Position } from "react-flow-renderer";
import styled from "styled-components";
import { handleStyle1 } from "../../utils";
export const Start = () => {
  return (
    <StartWrapper>
      <Handle
        type="source"
        position={Position.Right}
        id="start"
        style={handleStyle1}
      />
      Start
    </StartWrapper>
  );
};

const StartWrapper = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background-color: #b1d4a1;
  font-size: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;
