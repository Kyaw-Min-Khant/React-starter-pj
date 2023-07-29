export const reducer = (state, action) => {
  switch (action.type) {
    case "getProducts":
      return { ...state, productsList: action.payload };
    case "Add_to_cart":
      const isExisted = state?.addToCart.find(
        (item) => item.id === action.payload.id
      );

      if (isExisted) {
        return state;
      } else {
        return {
          ...state,
          addToCart: [...state.addToCart, { ...action.payload }],
        };
      }
  }
};
