import React from 'react';
import styled from "styled-components/macro";

const Header = ({totalPrice}) => {
  return (
    <StyledHeader>
      <StyledH1>Shopyfroots</StyledH1>
      <Wrapper1>
        <Wrapper2>${totalPrice}</Wrapper2>
      </Wrapper1>
    </StyledHeader>
  );
};

export default Header;

//-----//

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #59a96a;
  color: white;
  padding: 15px;
  box-shadow: 0 3px 3px hsla(27, 44%, 19%, 0.15);
`;

const Wrapper1 = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 700;
  font-size: 1.5rem;

  > :not(:first-child) {
    margin-left: 15px;
  }
`;

const Wrapper2 = styled.div`
  align-self: flex-end;
  border-radius: 3px;
`;

const StyledH1 = styled.h1`
  font: 700 2rem Sanchez, sans-serif;
  text-transform: uppercase;
  margin: 0;
`;