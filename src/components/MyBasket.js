import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const MyBasket = ({ fruitsList, list, noFruits }) => {
  const getFruitColor = label =>
    fruitsList.filter(fruit => fruit.label === label)[0].color;
  return (
    <>
      {noFruits ? (
        <StyledSpan>Your cart is empty</StyledSpan>
      ) : (
        <StyledUl>
          <div>
            {list
              .filter(f => f.quantity > 0)
              .map((f, index) => (
                <StyledLi
                  background={getFruitColor(f.label)}
                  key={`fruitList-${index}`}
                >
                  <span>{f.label} : </span>
                  <StyledSpan2 background={getFruitColor(f.label)}>
                    {f.quantity}
                  </StyledSpan2>
                </StyledLi>
              ))}
          </div>
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

  > div {
    display: flex;
    flex-wrap: wrap;
    margin: -3.75px;
  }
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  border: 3px solid ${props => props.background};
  border-radius: 50px;
  margin: 3.75px;

  > :not(:first-child) {
    margin-left: 7.5px;
  }
`;

const StyledSpan = styled.span`
  align-self: center;
  font-weight: 700;
  font-style: italic;
  color: ${props => props.theme.colors.disabled2};
  text-align: center;
  padding: 30px 0;
  border-top: ${props => `1px solid ${props.theme.colors.disabled1}`};
  border-bottom: ${props => `1px solid ${props.theme.colors.disabled1}`};
  margin: auto;
  animation: ${fadeIn} 0.75s ease-in-out;
`;

const StyledSpan2 = styled.span`
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background: ${props => props.background};
  color: white;
  border-radius: 50px;
`;
