import React from "react";
import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;


const MyBasket = ({ list, noFruits }) => {
  return (
    <>
      {noFruits ? (
        <StyledSpan>Votre panier est vide</StyledSpan>
      ) : (
        <StyledUl>
          {list
            .filter(f => f.quantity > 0)
            .map((f, index) => (
              <li key={`fruitList-${index}`}>
                {f.label} : {f.quantity}
              </li>
            ))}
        </StyledUl>
      )}
    </>
  );
};

export default MyBasket;

//-----//

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledSpan = styled.span`
  font-style: italic;
  text-align: center;
  padding: 15px;
  border: 3.75px solid hsla(0, 0%, 0%, .25);
  animation: ${fadeIn} .75s ease-in-out;
`;