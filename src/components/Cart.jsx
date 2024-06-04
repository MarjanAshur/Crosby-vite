import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Spinner from '../pages/Spinner';

const Cart = () => {
  const { cart, total, addToCart, removeFromCart, deleteFromCart, clearCart } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);

  const handleCheckout = () => {
    setIsCheckout(true);
    setTimeout(() => {
      clearCart();
    }, 2000); 
  };

  return (
    <div className="cart-sec">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${item.total.toFixed(2)}</p>
                  <div className="cart-item-actions">
                    <button onClick={() => removeFromCart(item.id)}>-</button>
                    <button onClick={() => addToCart(item)}>+</button>
                    <button className='delete-button' onClick={() => deleteFromCart(item.id)}>x</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className='checkout-button' onClick={handleCheckout}>Checkout</button>
        </>
      )}
      {isCheckout && <Spinner />}
    </div>
  );
};

export default Cart;
