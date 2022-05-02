import styled from "styled-components";

export const WorkFlowsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  .button {
    border: none;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.3);
    padding: 1.5rem;
    cursor: pointer;
    position: absolute;
    font-size: 1.5rem;

    top: 1rem;
    right: 3rem;
  }

  .message {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    height: 90vh;
    width: 100%;
    text-align: center;
  }
`;
