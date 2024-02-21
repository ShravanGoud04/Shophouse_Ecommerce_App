import React from "react";

import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const { carts } = useSelector((state) => state.carts);

  const total = carts.reduce((p, c) => {
    return p + c.NewPrice;
  }, 0);

  return (
    <>
      <div className='cart-container'>
        <div className='cart-items'>
          {carts.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
        </div>

        <div className='bill-section'>
          <h1>
            Total Amount : <br />
            <br />${total.toFixed(2)}
          </h1>
          <button className='pay-btn'>Pay Now</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
