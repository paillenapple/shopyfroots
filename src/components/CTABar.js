import React from "react";
import styled from "styled-components/macro";

const CTABar = (props) => {
  const emptyCart = () => {
    props.emptyCart();
  };
  return (
    <Wrapper1>
      <StyledButton
        background="#B02E0C"
        disabled={props.nbFruits === 0}
        type="button"
        onClick={emptyCart}
      >
        Empty cart
      </StyledButton>
      <StyledButton
        className="validate"
        background="#59A96A"
        disabled={props.nbFruits === 0}
        type="button"
      >
        Proceed ({props.nbFruits} {props.nbFruits <= 1 ? "item" : "items"})
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
  font: 400 1rem "Open Sans", sans-serif;
  background: ${props => props.background};
  color: white;
  padding: 12px 18px;
  border: none;
  border-radius: 3px;
  transition: background ease-in-out 0.15s,
    color ease-in-out 0.15s, transform linear 0.1s;

  &:disabled {
    background: #DDDCDC;
    color: #a3a1a1;
    border-radius: 3px;
  }

  &:active {
    transform: scale(1.1);
  }
`;
