import {createStore} from "redux";
import reducer from "./../reducers";
const initialState = {
  list: [
    {
      label: "lime",
      quantity: 0,
    },
    {
      label: "apple",
      quantity: 0,
    },
    {
      label: "cherry",
      quantity: 0,
    },
    {
      label: "grapes",
      quantity: 0,
    },
    {
      label: "lemon",
      quantity: 0,
    },
    {
      label: "orange",
      quantity: 0,
    },
    {
      label: "pear",
      quantity: 0,
    },
  ],
  nbFruits: 0,
  totalPrice: 0,
}
const store = createStore(reducer, initialState);
export default store;