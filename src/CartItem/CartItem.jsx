import React from 'react';
import {BsCartDashFill} from 'react-icons/bs';

import './CartItem.css';

function CartItem(){
  return(
    <section className="cart-item">
      <img src=""
        alt="product image"
        className="cart-item-image" 
      /> 
      <div className="cart-item-content">
        <h3 className="cart-item-title">
          Titulo do produto
        </h3>
        <h3 className="cart-item-price">
          R$123,00    
        </h3>
        <button type="button"
          className="button__remove-item">

          <BsCartDashFill/>
        </button>
      </div>

    </section>
  );
}


export default CartItem;
