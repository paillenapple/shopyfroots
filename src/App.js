import React from "react";
import { connect } from "react-redux";
import { addFruit, removeFruit, emptyCart } from "./actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components/macro";
import { fruitsList } from "./constants";
import {
  Header,
  FruitBasket,
  MyBasket,
  CTABar,
  Footer
} from "./components";

class App extends React.Component {
  notify = notif => {
    toast(notif, {
      className: "toast-wrapper",
      bodyClassName: "toast-body",
    });
  }

  addFruit = (label, price, color) => {
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
    const message = <span>+1 <strong css={`color: ${color}`}>{label}</strong> in your basket</span>;
    addFruit(newList, newNbFruits, newTP);
    this.notify(message);
  };

  removeFruit = (label, price, color) => {
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
      const message = <span>-1 <strong css={`color: ${color}`}>{label}</strong> in your basket</span>;
      removeFruit(newList, newNbFruits, newTP);
      this.notify(message);
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
    this.notify("Your basket has been emptied");
  };

  render() {
    const { list, nbFruits, totalPrice } = this.props;
    return (
      <>
        <Header totalPrice={totalPrice} />
        <StyledMain>
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
            <StyledToastContainer
              closeButton={false}
              hideProgressBar={true}
              position={toast.POSITION.BOTTOM_RIGHT}
              pauseOnFocusLoss={false}
              autoClose={4000}
            />
          </Wrapper1>
          <MyBasket
            fruitsList={fruitsList}
            list={list}
            noFruits={nbFruits === 0}
          />
          <CTABar emptyCart={this.emptyCart} nbFruits={nbFruits} />
        </StyledMain>
        <Footer />
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
  grid-gap: 30px;
  justify-items: center;
`;

const StyledMain = styled.main`
  align-self: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 30px;

  > :not(:first-child) {
    margin-top: 30px;
  }
`;

const StyledToastContainer = styled(ToastContainer)`
  width: auto;
  padding: 0;

  > :not(:first-child) {
    margin-top: 7.5px;
  }

  & .toast-wrapper {
    min-height: auto;
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.oakwood};
    padding: 15px;
    border: ${props => `1px solid ${props.theme.colors.oakwood}`};
    border-radius: 3px;
    margin-bottom: 0;
    box-shadow: 0 3px 3px hsla(27, 44%, 19%, 0.15);
  }

  & .toast-body {
    font: 400 1rem "Open Sans", sans-serif;
    text-align: center;
  }

  & .Toastify__close-button--default {
    color: white;
  }
`;