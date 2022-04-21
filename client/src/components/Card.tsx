import styled from "styled-components";

type Props = {
  children?: JSX.Element | JSX.Element[];
  cardBorderRadius: string;
  cardWidth: string;
  cardMarginBottom: string;
  cardMinHeight: string;
};

const Card: React.FC<Props> = ({
  children,
  cardBorderRadius,
  cardWidth,
  cardMarginBottom,
  cardMinHeight,
}) => {
  return (
    <StyledCard
      cardBorderRadius={cardBorderRadius}
      cardWidth={cardWidth}
      cardMarginBottom={cardMarginBottom}
      cardMinHeight={cardMinHeight}
    >
      <StyledContent>{children}</StyledContent>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background: #fff;
  background-clip: border-box;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props.cardBorderRadius};
  width: ${(props) => props.cardWidth};
  min-height: ${(props) => props.cardMinHeight};

  @media screen and (max-width: 992px) {
    width: 30rem;
  }

  @media screen and (max-width: 768px) {
    width: 40rem;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 360px) {
    width: 100%;
    font-size: 0.6rem;
  }
`;

const StyledContent = styled.div`
  margin-bottom: ${(props) => props.cardMarginBottom};

  @media screen and (max-width: 576px) {
    margin-bottom: 0;
  }
`;

export default Card;
