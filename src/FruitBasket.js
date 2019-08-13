import React from "react";
import styled from "styled-components";

const FruitBasket = props => {
  const { background, icon, label, price, quantity } = props;
  const addFruit = e => {
    props.addFruit(label, e.target.dataset.price);
  };

  const removeFruit = e => {
    props.removeFruit(label, e.target.dataset.price);
  };
  return (
    <Wrapper1>
      <StyledHeader background={background}>
        <Wrapper2 background={background}>
          {icon !== null && typeof icon !== "undefined" && (
            <Wrapper4 background={background}>
              <StyledImg src={icon} alt="" />
            </Wrapper4>
          )}
        </Wrapper2>
        <StyledSpan background={background}>{label}</StyledSpan>
      </StyledHeader>
      <Wrapper3 background={background}>
        <Wrapper5>
          <Wrapper7>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            delectus officia debitis error quam eos, assumenda quis, ab
            mollitia eligendi aliquam consectetur quas quia suscipit sit vero
            vel voluptates rem?
          </Wrapper7>
          <Wrapper9>
            <Wrapper8>{price}€ le kilo</Wrapper8>
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
          </Wrapper9>
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
  background: linear-gradient(to top, white, ${props => props.background});
  border-top: none;
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
  padding: 7.5px;
  padding-top: 32.5px;
  border-radius: 1px;
  margin: 3.75px;

  > :not(:first-child) {
    margin-top: 15px;
  }
`;

const Wrapper6 = styled.div`
  align-self: flex-end;
  display: flex;

  > :not(:first-child) {
    margin-left: 7.5px;
  }
`;

const Wrapper7 = styled.div`
  font-size: 0.8rem;
`;

const Wrapper8 = styled.div`
  font: 700 1rem Montserrat, sans-serif;
`;

const Wrapper9 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeader = styled.header`
  display: flex;
  height: 50px;
  background: ${props => props.background};
  border-radius: 3px 3px 0 0;
`;

const StyledSpan = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 700 1rem Montserrat, sans-serif;
  background: white;
  text-transform: uppercase;
  border: ${props => `3.75px solid ${props.background}`};
  border-bottom: none;
  border-left: none;
  border-radius: 0 3px 0 0;
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
  font: 700 1.2rem Montserrat, sans-serif;
  background: white;
  padding: 0;
  border: ${props => `3.75px solid ${props.background}`};
  border-radius: 50px;
  transition: background ease-in-out 0.15s, color ease-in-out 0.15s,
    transform linear 0.1s;

  &:disabled {
    background: #eee;
    color: #aaa;
    border: 3.75px solid #ccc;
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
  min-width: 240px;
  min-height: 240px;
  border-radius: 3px;
`;
