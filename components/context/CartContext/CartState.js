import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';
const cartProducts = [
    {
        product_id: 1,
        product_title: 'Ultimate Photography Bundle',
        thumb: 'images/shop/01.jpg',
        quantity: 1,
        product_price: 425.50,
    },
    {
        product_id: 2,
        product_title: 'Ultimate Photography Bundle',
        thumb: 'images/shop/01.jpg',
        quantity: 1,
        product_price: 425.00,
    },
    {
        product_id: 3,
        product_title: 'Ultimate Photography Bundle',
        thumb: 'images/shop/01.jpg',
        quantity: 2,
        product_price: 425.05,
    }
];
const ISSERVER = typeof window === 'undefined';
// logged in user 
const billingInfoFromStorage =
    !ISSERVER && localStorage.getItem('billingInfo')
        ? JSON.parse(localStorage.getItem('billingInfo'))
        : null;

// Initial state
const initialState = {
    cart: [],
    cartItems: [...cartProducts],
    paymentInfo: {},
    billingDetails: billingInfoFromStorage
};

// Create context
export const CartContext = createContext(initialState);

// Provider component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    // Actions
    async function addToCart(id){
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        // const { data } = await axios.post(`${key}add-item`, 540, config)
        await axios.post('http://financelms.wpengine.com/wp-json/cocart/v1/add-item/',  { product_id : id } , config)
            .then(res => {
                dispatch({
                    type: 'CART_ADD_ITEM',
                        payload: {
                            product_id: res.data.product_id,
                            quantity: res.data.quantity,
                            product_name: res.data.product_name,
                            product_title: res.data.product_title,
                            countInStock: res.data.countInStock,
                            product_price: res.data.product_price,
                        },
                    })
            })
            .catch(error => {
                console.log(error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message);
            })
      
        // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
      }

      async function removerCart(id){
        // const { data } = await axios.get(`/api/products/${id}`)
        dispatch({
            type: 'CART_REMOVE_ITEM',
            payload: id,
          })
      
        // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
      }


    async function payOrder(paymentResult) {
        dispatch({
            type: 'ORDER_PAY_SUCCESS',
            payload: paymentResult
        })
    }
    async function billingDetails(billingInfo) {
        dispatch({
            type: 'BILLING_DETAILS_SUCCESS',
            payload: billingInfo
        })
        localStorage.setItem('billingInfow', JSON.stringify(billingInfo));
    }

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                addToCart,
                removerCart,
                cartItemInfo: state.cartItems,
                payOrder,
                billingDetails
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
