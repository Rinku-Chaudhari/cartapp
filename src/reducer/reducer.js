const initialState = {
	cartItems: [],
	cartLoaded: false,
};

const reducer = (state = { initialState }, action) => {
	switch (action.type) {
		case "REMOVE_FROM_CART":
			const filteredCartItems = state.initialState.cartItems.filter(
				(item) => {
					return item.id !== action.payload;
				}
			);
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
