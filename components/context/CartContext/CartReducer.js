export default (state, action) => {
    console.log(state);
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
        case 'ORDER_PAY_SUCCESS':
            return {...state, paymentInfo: action.payload }
        case 'BILLING_DETAILS_SUCCESS':
            return { ...state, billingDetails: action.payload }
        default:
            return state;
    }
};
