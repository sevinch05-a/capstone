// import React, { createContext, useState, useContext } from 'react';

// // Create Cart Context
//  export const CartContext = createContext();

// // Cart Provider Component
// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addToCart = (item) => {
//         setCart((prevCart) => [...prevCart, item]);
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// // Custom hook to use the Cart Context
// export const useCart = () => {
//     return useContext(CartContext);
// };
