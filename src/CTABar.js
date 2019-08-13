import React from "react";
import styled from "styled-components";

const CTABar = (props) => {
  const emptyCart = () => {
    props.emptyCart();
  };
  return (
    <Wrapper1>
      <StyledButton background="#B02E0C" type="button" onClick={emptyCart}>
        Vider mon panier
      </StyledButton>
      <StyledButton
        className="validate"
        background="#59A96A"
        disabled={props.nbFruits === 0}
        type="button"
      >
        Valider ma commande ({props.nbFruits}{" "}
        {props.nbFruits <= 1 ? "fruit" : "fruits"})
      </StyledButton>
    </Wrapper1>
  );
};

export default CTABar;

//-----//

const Wrapper1 = styled.div`
  display: flex;
  justify-content: center;

  > :not(:first-child) {
    margin-left: 15px;
  }
`;

const StyledButton = styled.button`
  font: 700 0.8rem Montserrat, sans-serif;
  background: ${props => props.background};
  color: white;
  padding: 12px 18px;
  border: none;
  border-radius: 3px;
  transition: background ease-in-out 0.15s, color ease-in-out 0.15s;

  &:disabled {
    background: #e0dddc;
    color: #a3a1a1;
    border-radius: 3px;
  }
`;
