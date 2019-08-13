import React from "react";
import { connect } from "react-redux";
import { addFruit, removeFruit, emptyCart } from "./actions";
import styled from "styled-components";
import { fruitsList } from "./constants";
import FruitBasket from "./FruitBasket";
import MyBasket from "./MyBasket";
import CTABar from "./CTABar";

class App extends React.Component {
  addFruit = (label, price) => {
    const { addFruit, list, nbFruits, totalPrice } = this.props;
    const newList = list.map(f => {
      if (f.label === label) {
        const newObject = {
          label: label,
          quantity: f.quantity + 1
        };
        const mergedObject = { ...f, ...newObject };
        return mergedObject;
      } else {
        return f;
      }
    });
    const newNbFruits = nbFruits + 1;
    const newTP = totalPrice + parseFloat(price);
    addFruit(newList, newNbFruits, newTP);
  };

  removeFruit = (label, price) => {
    const { list, nbFruits, removeFruit, totalPrice } = this.props;
    const currentFruit = list.filter(f => f.label === label)[0];
    if (currentFruit.quantity > 0) {
      const newList = list.map(f => {
        if (f.label === label) {
          const newObject = {
            label: label,
            quantity: f.quantity - 1
          };
          const mergedObject = { ...f, ...newObject };
          return mergedObject;
        } else {
          return f;
        }
      });
      const newNbFruits = nbFruits > 0 ? nbFruits - 1 : nbFruits;
      const newTP =
        totalPrice - parseFloat(price) >= 0
          ? totalPrice - parseFloat(price)
          : totalPrice;
      removeFruit(newList, newNbFruits, newTP);
    }
  };

  emptyCart = () => {
    const { emptyCart, list } = this.props;
    const newList = list.map(f => {
      const newObject = {
        label: f.label,
        quantity: 0
      };
      const mergedObject = { ...f, ...newObject };
      return mergedObject;
    });
    const newNbFruits = 0;
    const newTP = 0;
    emptyCart(newList, newNbFruits, newTP);
  };

  render() {
    const { list, nbFruits, totalPrice } = this.props;
    return (
      <>
        <StyledMain>
          <Wrapper2>
            <StyledH1>Shopyfroots</StyledH1>
            <Wrapper5>
              <Wrapper4>Total: {totalPrice}€</Wrapper4>
            </Wrapper5>
          </Wrapper2>
          <Wrapper1>
            {fruitsList.map((f, index) => (
              <FruitBasket
                addFruit={this.addFruit}
                removeFruit={this.removeFruit}
                nbFruits={nbFruits}
                totalPrice={totalPrice}
                list={list}
                background={f.color}
                icon={f.icon}
                quantity={
                  list.filter(fruit => fruit.label === f.label)[0].quantity
                }
                key={`fruit-${index}`}
                label={f.label}
                price={f.price}
              />
            ))}
          </Wrapper1>
          <MyBasket list={list} noFruits={nbFruits === 0} />
          <CTABar emptyCart={this.emptyCart} nbFruits={nbFruits} />
        </StyledMain>
        <StyledFooter></StyledFooter>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list,
    totalPrice: state.totalPrice,
    nbFruits: state.nbFruits
  };
};

const mapDispatchToProps = { addFruit, emptyCart, removeFruit };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

//-----//

const Wrapper1 = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 15px;
`;

const Wrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #59a96a;
  color: white;
  padding: 15px;
  margin: -30px -30px 0;
`;

const Wrapper4 = styled.div`
  align-self: flex-end;
  border-radius: 3px;
`;

const Wrapper5 = styled.div`
  display: flex;
  align-items: flex-end;
  font: 700 1.35rem Montserrat, sans-serif;

  > :not(:first-child) {
    margin-left: 15px;
  }
`;

const StyledMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  > :not(:first-child) {
    margin-top: 30px;
  }
`;

const StyledFooter = styled.footer`
  background: #e0dddc;
  padding: 30px 0;
  margin: 0 -30px -30px;
`;

const StyledH1 = styled.h1`
  font: 700 2rem Montserrat, sans-serif;
  text-transform: uppercase;
  margin: 0;
`;