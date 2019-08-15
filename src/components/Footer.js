import React from "react";
import styled from "styled-components/macro";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSpan>Developed by S. MAZIERE - 08/2019</StyledSpan>
    </StyledFooter>
  );
};

export default Footer;

//-----//

const StyledFooter = styled.footer`
  display: flex;
  background: #59a96a;
  color: white;
  padding: 15px;
`;

const StyledSpan = styled.span`
  font: 700 0.9rem "Sanchez", sans-serif;
  margin: auto;
`;
