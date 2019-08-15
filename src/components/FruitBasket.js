import React from "react";
import styled from "styled-components/macro";

const FruitBasket = props => {
  const { background, icon, label, price, quantity } = props;
  const addFruit = e => {
    props.addFruit(label, e.target.dataset.price, background);
  };

  const removeFruit = e => {
    props.removeFruit(label, e.target.dataset.price, background);
  };
  return (
    <Wrapper1>
      <StyledHeader background={background}>
        {/* <Wrapper2 background={background}>
          {icon !== null && typeof icon !== "undefined" && (
            <Wrapper4 background={background}>
              <StyledImg src={icon} alt="" />
            </Wrapper4>
          )}
        </Wrapper2> */}
        <StyledSpan>{label}</StyledSpan>
        <Wrapper8 background={background}>${price}</Wrapper8>
      </StyledHeader>
      <Wrapper3 background={background}>
        <Wrapper5>
          <Wrapper7>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            delectus officia debitis error quam eos, assumenda quis, ab mollitia
            eligendi aliquam consectetur quas quia suscipit sit vero vel
            voluptates rem?
          </Wrapper7>
          <Wrapper6>
            <StyledButton
              background={background}
              data-price={price}
              disabled={quantity === 0}
              onClick={e => removeFruit(e)}
              type="button"
            >
              -1
            </StyledButton>
            <StyledButton
              background={background}
              data-price={price}
              onClick={e => addFruit(e)}
              type="button"
            >
              +1
            </StyledButton>
          </Wrapper6>
        </Wrapper5>
      </Wrapper3>
    </Wrapper1>
  );
};

FruitBasket.defaultProps = {
  background: "#ddd",
  icon: null,
  label: "Fruit",
  price: 1
};

export default FruitBasket;

//-----//

const Wrapper2 = styled.div`
  position: relative;
  display: flex;
  width: 50px;
  background: linear-gradient(315deg, white, ${props => props.background});
  border-radius: 3px 0 0 0;
`;

const Wrapper3 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Wrapper4 = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50px;
  margin: auto;
  box-shadow: ${props => `2.5px 0 1px ${props.background}`};
`;

const Wrapper5 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 15px;
  border-radius: 0 0 3px 3px;

  > :not(:first-child) {
    margin-top: 15px;
  }
`;

const Wrapper6 = styled.div`
  align-self: center;
  display: flex;

  > :not(:first-child) {
    margin-left: 7.5px;
  }
`;

const Wrapper7 = styled.div`
  font-size: 0.9rem;
`;

const Wrapper8 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(25%, -10%) rotate(15deg);
  background: ${props => props.background};
  color: white;
  padding: 8px 20px;
  border-radius: 3px;
  box-shadow: 0 2px 2px 1px hsla(27, 44%, 12%, 0.2);
`;

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  background: ${props => props.theme.colors.white};
  padding: 15px;
  border-radius: 3px 3px 0 0;
`;

const StyledSpan = styled.span`
  font: 700 1.2rem "Open Sans", sans-serif;
  background: white;
  text-transform: uppercase;
  border-radius: 3px;
`;

const StyledImg = styled.img`
  display: flex;
  margin: 10%;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font: 700 1.1rem "Open Sans", sans-serif;
  background: ${props => props.theme.colors.white};
  padding: 0;
  border: ${props => `3px solid ${props.background}`};
  border-radius: 50px;
  box-shadow: 0 2px 2px 1px hsla(27, 44%, 12%, 0.2);
  transition: background ease-in-out 0.15s, color ease-in-out 0.15s,
    transform linear 0.1s;

  &:disabled {
    background: ${props => props.theme.colors.disabled1};
    color: ${props => props.theme.colors.disabled2};
    border: ${props => `3.75px solid ${props.theme.colors.disabled2}`};
  }

  &:hover:not(:disabled) {
    background: ${props => props.background};
    color: white;
  }

  &:active {
    transform: scale(1.15) rotate(15deg);
  }
`;

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  background: ${props => props.theme.colors.oakwood};
  border-radius: 5px;
  box-shadow: 0 2px 2px 1px hsla(27, 44%, 12%, 0.2);

  > :not(:first-child) {
    margin-top: 3px;
  }
`;
