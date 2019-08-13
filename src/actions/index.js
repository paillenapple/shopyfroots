const addFruit = (newList, newNbFruits, newTP) => {
  return {
    type: "ADD_FRUIT",
    newList,
    newNbFruits,
    newTP,
  }
};

const removeFruit = (newList, newNbFruits, newTP) => {
  return {
    type: "REMOVE_FRUIT",
    newList,
    newNbFruits,
    newTP,
  };
};

const emptyCart = (newList, newNbFruits, newTP) => {
  return {
    type: "REMOVE_FRUIT",
    newList,
    newNbFruits,
    newTP
  };
};

export {
  addFruit,
  removeFruit,
  emptyCart
}