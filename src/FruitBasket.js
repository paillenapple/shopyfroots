import React from "react";
import styled from "styled-components";

class FruitBasket extends React.Component {
  addFruit = e => {
    const newList = this.props.list.map(f => {
      if (f.label === this.props.label) {
        const newObject = {label: this.props.label, quantity: f.quantity + 1 };
        const mergedObject = {...f, ...newObject};
        return mergedObject;
      } else {
        return f;
      }
    });
    const newNbFruits = this.props.nbFruits + 1;
    const newTP = this.props.totalPrice + parseFloat(e.target.dataset.price);
    this.props.addFruit(newList, newNbFruits, newTP);
  };

  removeFruit = e => {
    const currentFruit = this.props.list.filter(f => f.label === this.props.label)[0];
    if (currentFruit.quantity > 0) {
      const newList = this.props.list.map(f => {
        if (f.label === this.props.label) {
          const newObject = {
            label: this.props.label,
            quantity: f.quantity - 1
          };
          const mergedObject = { ...f, ...newObject };
          return mergedObject;
        } else {
          return f;
        }
      });

      const newNbFruits =
        this.props.nbFruits > 0
          ? this.props.nbFruits - 1
          : this.props.nbFruits;

      const newTP =
        this.props.totalPrice - parseFloat(e.target.dataset.price) >= 0
          ? this.props.totalPrice - parseFloat(e.target.dataset.price)
          : this.props.totalPrice;

      this.props.removeFruit(newList, newNbFruits, newTP);
    }
  };

  render() {
    return (
      <Wrapper1>
        <StyledHeader background={this.props.background}>
          <Wrapper2 background={this.props.background}>
            <Wrapper4 background={this.props.background}>
              <StyledImg src={this.props.icon} alt="" />
            </Wrapper4>
          </Wrapper2>
          <StyledSpan background={this.props.background}>{this.props.label}</StyledSpan>
        </StyledHeader>
        <Wrapper3 background={this.props.background}>
          <Wrapper5>
            <Wrapper7>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              delectus officia debitis error quam eos, assumenda quis, ab
              mollitia eligendi aliquam consectetur quas quia suscipit sit vero
              vel voluptates rem?
            </Wrapper7>
            <Wrapper9>
              <Wrapper8>{this.props.price}€ le kilo</Wrapper8>
              <Wrapper6>
                <StyledButton
                  background={this.props.background}
                  data-price={this.props.price}
                  onClick={this.removeFruit}
                  type="button"
                >
                  -1
                </StyledButton>
                <StyledButton
                  background={this.props.background}
                  data-price={this.props.price}
                  onClick={this.addFruit}
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
  }
}

export default FruitBasket;

//-----//

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 240px;
  min-height: 240px;
  border-radius: 3px;
`;

const Wrapper2 = styled.div`
  position: relative;
  display: flex;
  width: 50px;
  border-radius: 3px 0 0 0;
  background: linear-gradient(315deg, white, ${props => props.background});
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
`;
