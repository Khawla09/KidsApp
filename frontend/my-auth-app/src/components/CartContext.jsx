// // CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const updateCartItem = (productId, quantity) => {
    setCartItems(
      cartItems.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== productId)
    );
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCartItem, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//   };


//   const updateCartItem = (productId, quantity) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item._id === productId ? { ...item, quantity } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItem }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
