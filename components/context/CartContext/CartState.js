import React, { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';
const cartProducts = [
    {
        id: 1,
        title: 'Ultimate Photography Bundle',
        thumb: 'images/shop/01.jpg',
        quantity: 1,
        itemPrice: 425.50,
    },
    {
        id: 2,
        title: 'Ultimate Photography Bundle',
        thumb: 'images/shop/01.jpg',
        quantity: 1,
        itemPrice: 425.00,
    },
    {
        id: 3,
        title: 'Ultimate Photography Bundle',
        thumb: 'images/shop/01.jpg',
        quantity: 2,
        itemPrice: 425.05,
    }
];

// Initial state
const initialState = {
    cart: [],
    cartItems: [...cartProducts]
};

// Create context
export const CartContext = createContext(initialState);

// Provider component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    // Actions
    async function addToCart(id, qty){
        // const { data } = await axios.get(`/api/products/${id}`)
      
        dispatch({
          type: 'CART_ADD_ITEM',
          payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
          },
        })
      
        // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
      }

      async function removerCart(id){
        // const { data } = await axios.get(`/api/products/${id}`)
         console.log(id);
        dispatch({
            type: 'CART_REMOVE_ITEM',
            payload: id,
          })
      
        // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
      }

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                addToCart,
                removerCart,
                cartItemInfo: state.cartItems
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
