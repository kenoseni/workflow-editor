import React from "react";
import styled from "styled-components";

export const Specification = ({ spec }: any) => {
  return (
    <Wrapper>
      <h2>{spec.purpose}</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 10rem;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.3);
  padding: 6rem;
  cursor: pointer;
`;
