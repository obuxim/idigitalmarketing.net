import { createContext, useState } from 'react';
export const CartContext = createContext();

export function CartContextWrap({ children }) {
    const [cartData, setCartData] = useState([]);
    return (
        <CartContext.Provider value={[cartData, setCartData]}>
            {children}
        </CartContext.Provider>
    );
}
