import axios from 'axios';
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, updateCartItem, removeFromCart } = useContext(CartContext);

  const handleUpdateCartItem = async (productId, quantity) => {
    try {
      const response = await axios.put(`http://localhost:3005/api/cart/${productId}`, { quantity });

      // Update the cart in the context
      updateCartItem(productId, response.data.updatedItem.quantity);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:3005/api/cart/${productId}`);
    
      if (response.status === 200) {
        removeFromCart(productId);
      } else {
        console.error('Failed to remove from cart:', response.data.message);
      }
    } catch (error) {
      console.error('Error removing from cart:', error.response?.data?.message || error.message);
    }
    console.log(":remmoving item with id",productId )
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id}>
              <p>{item.name}</p>
              {/* <img src={item.data.images[0]} alt="NA image" /> */}
              {/* <img src={item.images[0]} alt=""  /> */}
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleUpdateCartItem(item.productId, item.quantity + 1)}>+</button>
              <button onClick={() => handleUpdateCartItem(item.productId, item.quantity - 1)}>-</button>
              <button onClick={() => handleRemoveFromCart(item.productId)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
