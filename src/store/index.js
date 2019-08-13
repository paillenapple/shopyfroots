import {createStore} from "redux";
import reducer from "./../reducers";
const initialState = {
  list: [
    {
      label: "citron vert",
      quantity: 0,
    },
    {
      label: "pomme",
      quantity: 0,
    },
    {
      label: "cerise",
      quantity: 0,
    },
    {
      label: "raisin",
      quantity: 0,
    },
    {
      label: "citron",
      quantity: 0,
    },
    {
      label: "orange",
      quantity: 0,
    },
    {
      label: "poire",
      quantity: 0,
    },
  ],
  nbFruits: 0,
  totalPrice: 0,
}
const store = createStore(reducer, initialState);
export default store;