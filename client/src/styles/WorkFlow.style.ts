import styled from "styled-components";

export const WorkFlowWrapper = styled.div`
  min-height: 95vh;
  position: relative;

  .container {
    display: flex;
    gap: 1rem;
    background-color: #fff;
    min-height: 95vh;
    justify-content: space-between;
    text-align: center;
  }

  .workflow-section {
    width: 60%;
    font-size: 1.5rem;
    padding: 1rem;
  }

  .experiment-details {
    width: 40%;
    border-left: 1px solid #000;
    font-size: 1.5rem;
    padding: 1rem;
  }
`;
