export const addItem = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const delItem = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

export const removeItem = (product) => {
  return {
    type: "REMOVE",
    payload: product,
  };
};
