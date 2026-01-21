import React, { useState } from 'react';
import './ShoppingCart.css';
const ShoppingCart = () => {
  const items = [
    { name: 'Uniform', price: 20 ,img :"./images/uniform.jpg"},
    { name: 'Shoes', price: 50, img :"./images/shooes.jpeg"},
    { name: 'Bag', price: 30, img :"./images/bag.jpeg" },
  ];

  const [cart, setCart] = useState({
    Uniform: { quantity: 0, price: 20 },
    Shoes: { quantity: 0, price: 50 },
    Bag: { quantity: 0, price: 30 },
  });

  const addToCart = (itemName) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemName]: {
        ...prevCart[itemName],
        quantity: prevCart[itemName].quantity + 1,
      },
    }));
  };

  const totalQuantity = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = Object.values(cart).reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      {items.map((item) => (
        <div key={item.name} className="item">
          <img src={item.img} alt={item.name} className="item-image" />
          <span>{item.name} - ${item.price}</span>
          <button onClick={() => addToCart(item.name)}>Add to Cart</button>
        </div>
      ))}
      <div className="summary">
        <h2>Cart Summary</h2>
        {Object.entries(cart).map(([name, item]) => (
          <div key={name} className="summary-item">
            {/* <span>{name}: {item.quantity} x ${item.price} = ${item.quantity * item.price}</span> */}
            <span>{name}:</span><span></span><span>{item.quantity}</span>
          </div>
        ))}
        <h3 className="total">
          <span>Total Quantity:</span> <span>{totalQuantity}</span>
        </h3>
        <h3 className="total">
          <span>Total Price:</span> <span>${totalPrice}</span>
        </h3>
      </div>
    </div>
  );
};

export default ShoppingCart;
