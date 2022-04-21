import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const modalRoot = document.getElementById("modal-root") as HTMLElement;

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export const Modal: React.FC<Props> = ({ children }) => {
  const handleCloseModal = () => {};
  return ReactDOM.createPortal(
    <>
      <ModalContainer onClick={handleCloseModal} />
      <StyledModal key="modal">{children}</StyledModal>
    </>,
    modalRoot
  );
};

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  min-height: 100vh;
`;
