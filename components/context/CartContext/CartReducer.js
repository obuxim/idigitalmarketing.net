export default (state, action) => {
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
                  cartItems: state.cartItems.filter((x) => x.product_id !== parseInt(id)),
                }
        case 'ORDER_PAY_REQUEST':
            return {
                loading: true,
            }
        case 'ORDER_PAY_SUCCESS':
            return {
                loading: false,
                success: true,
            }
        case 'ORDER_PAY_FAIL':
            return {
                loading: false,
                error: action.payload,
            }
        case 'ORDER_PAY_RESET':
            return {}
        default:
            return state;
    }
};
