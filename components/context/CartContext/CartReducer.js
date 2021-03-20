export default (state, action) => {
    console.log(state.cartItems);
    switch (action.type) {
        case 'CART_ADD_ITEM':
            const item = action.payload

            const existItem = state.cartItems.find((x) => x.product === parseInt(item.product_id))

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.id === existItem.product_id ? item : x
                    ),
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                }
            }
        case 'CART_REMOVE_ITEM':
                const id = action.payload
                return {
                  ...state,
                  cartItems: state.cartItems.filter((x) => x.id !== parseInt(id)),
                }
        default:
            return state;
    }
};
