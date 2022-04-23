const addItem = [];

const addItems = (state = addItem, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // Chek if Product is Alredy Exist
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Increase the Quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    case "REMOVE":
      const exist2 = state.find((x) => x.id === product.id);

      return state.filter((x) => x.id !== exist2.id);

    default:
      return state;
  }
};

export default addItems;
