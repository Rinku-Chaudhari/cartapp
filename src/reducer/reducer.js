const initialState = {
  cartItems: [],
  cartLoaded: false,
};

const reducer = (state = { initialState }, action) => {
  switch (action.type) {
    case "INCREASE_ITEM_QUANTITY":
      const selectedItem0 = state.initialState.cartItems.findIndex((item) => {
        return (item.itemId = action.payload);
      });
      console.log(selectedItem0);
      return state;

    case "DECREASE_ITEM_QUANTITY":
      const selectedItem1 = state.initialState.cartItems.findIndex((item) => {
        return (item.itemId = action.payload);
      });
      console.log(selectedItem1);
      return state;

    case "ADD_TO_CART":
      const updatedCartItems = state.initialState.cartItems.concat(
        action.payload
      );
      return {
        ...state,
        initialState: {
          ...initialState,
          cartItems: updatedCartItems,
        },
      };

    case "REMOVE_FROM_CART":
      const filteredCartItems = state.initialState.cartItems.filter((item) => {
        return item.id !== action.payload;
      });
      return {
        ...state,
        initialState: {
          ...initialState,
          cartItems: filteredCartItems,
        },
      };

    case "SET_CART":
      return {
        ...state,
        initialState: {
          ...initialState,
          cartItems: action.payload,
          cartLoaded: !initialState.cartLoaded,
        },
      };

    default:
      return state;
  }
};

export default reducer;
