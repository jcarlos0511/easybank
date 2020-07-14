import React from "react";

import styled from "styled-components";
import { theme } from "../../styles";

const { fontSizes } = theme;

const StyledContainer = styled.article`
  border: 1px solid blue;
`;

const StyledImage = styled.div`
  border: 1px solid blue;
  width: 75px;
  margin: 0 auto;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: 75px;
`;

const StyledTitle = styled.h3`
  font-size: ${fontSizes.xl};
  font-weight: 400;
`;

const StyledItemsDescription = styled.p`
  font-size: ${fontSizes.sm};
  font-weight: 400;
  line-height: 1.75em;
`;

const FeaturedItems = ({ items }) => {
  const { title, description, image } = items;
  return (
    <StyledContainer>
      <StyledImage image={image} />
      <StyledTitle>{title}</StyledTitle>
      <StyledItemsDescription>{description}</StyledItemsDescription>
    </StyledContainer>
  );
};

export default FeaturedItems;
