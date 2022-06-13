import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  updateCartItem,
} from "../../../store/cart/cart.actions";

const Product = (props) => {
  const dispatch =useDispatch();
  const handleondelete=()=>{
    dispatch(deletePost(props.data))
  }
  const id = null;
  return (

    <div data-cy={`product-${id}`}>
      <h3 data-cy="product-name">name</h3>
      <h6 data-cy="product-description">description</h6>
      <button data-cy="product-add-item-to-cart-button" >add</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count"></span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button" onclick={handleondelete}>delete</button>
      </div>
    </div>
  );
};

export default Product;
