const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_FRUIT":
      return {
        ...state,
        list: action.newList,
        nbFruits: action.newNbFruits,
        totalPrice: action.newTP
      };
    case "REMOVE_FRUIT":
      return {
        ...state,
        list: action.newList,
        nbFruits: action.newNbFruits,
        totalPrice: action.newTP
      };
    default:
      return state;
  }
}

export default reducer;