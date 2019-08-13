import React from "react";
import { connect } from "react-redux";
import {addFruit, removeFruit} from "./actions";
import styled from "styled-components";
import { fruitsList } from "./constants";
import { cart } from "./images";
import FruitBasket from "./FruitBasket";

class App extends React.Component {
  render() {
    const {list, nbFruits, totalPrice, addFruit, removeFruit} = this.props;
    console.log(list, nbFruits, totalPrice);
    return (
      <StyledMain>
        <Wrapper2>
          <StyledH1>Shopyfroots</StyledH1>
          <Wrapper3>
            <StyledSpan>{nbFruits}</StyledSpan>
            <StyledImg src={cart} alt="" />
          </Wrapper3>
        </Wrapper2>
        <Wrapper1>
          {fruitsList.map((f, index) => (
            <FruitBasket
              addFruit={addFruit}
              removeFruit={removeFruit}
              nbFruits={nbFruits}
              totalPrice={totalPrice}
              list={list}
              background={f.color}
              icon={f.icon}
              key={`fruit-${index}`}
              label={f.label}
              price={f.price}
            />
          ))}
        </Wrapper1>
        {
          nbFruits > 0 &&
          <StyledUl>
            {
              list.filter(f => f.quantity > 0).map((f, index) => (
                <StyledLi key={`fruitList-${index}`}>{f.label} : {f.quantity}</StyledLi>
              ))
            }
          </StyledUl>
        }
        <Wrapper4>Total: {totalPrice}€</Wrapper4>
      </StyledMain>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    totalPrice: state.totalPrice,
    nbFruits: state.nbFruits
  };
};

const mapDispatchToProps = { addFruit, removeFruit };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

//-----//

const Wrapper1 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 15px;
`;

const Wrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper3 = styled.div`
  display: flex;
  align-items: center;

  > :not(:first-child) {
    margin-left: 3.75px;
  }
`;

const Wrapper4 = styled.div`
  align-self: flex-end;
  font: 700 1.35rem Montserrat, sans-serif;
  padding: 7.5px;
  border: 3.75px solid black;
  border-radius: 3px;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  > :not(:first-child) {
    margin-top: 30px;
  }
`;

const StyledH1 = styled.h1`
  font: 700 2rem Montserrat, sans-serif;
  text-transform: uppercase;
  margin: 0;
`;

const StyledSpan = styled.span`
  font: 700 1.35rem Montserrat, sans-serif;
`;

const StyledImg = styled.img`
  width: 25px;
`;

const StyledUl = styled.ul`

`

const StyledLi = styled.li`

`