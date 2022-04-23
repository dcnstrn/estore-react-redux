import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, delItem, removeItem } from "../redux/actions";

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();
  const handleClose = (item) => {
    dispatch(removeItem(item));
  };
  const handleDecrease = (item) => {
    dispatch(delItem(item));
  };
  const handleIncrease = (item) => {
    dispatch(addItem(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div key={cartItem.id} className="cartDetail container  ">
        <div>
          <button
            className="btn-close float-end"
            onClick={() => handleClose(cartItem)}
            aria-label="Close"
          ></button>
        </div>
        <div className="row py-4 cart__img-wrapper">
          <div className="col-md-6 text-center ">
            <NavLink to={`/products/${cartItem.id}`}>
              <img
                className="card-img-top productCartImg "
                src={`/${cartItem.img}`}
                alt={cartItem.title}
              />
            </NavLink>
          </div>
          <div className="col-md-6 text-center">
            <h1 className="display-5">{cartItem.title}</h1>

            <h3 className="display-6 fw-bold my-4">
              $ {cartItem.price * cartItem.qty}
            </h3>
            <div className="items__qty">{cartItem.qty}</div>
            <div className="cart__btns-wrapper">
              <div className="cart__btns">
                <button
                  className=" btn-qty"
                  onClick={() => handleDecrease(cartItem)}
                >
                  -
                </button>
                <button
                  className=" btn-qty"
                  onClick={() => handleIncrease(cartItem)}
                >
                  +
                </button>
              </div>
            </div>

            {/* <p className="lead">{cartItem.desc}</p> */}
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 py-5">
        <div className="container ">
          <div className="row">
            <h2 className="fw-bold text-black-50">Your Cart is Empty :(</h2>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row ">
          <NavLink
            to="/chekout"
            className="btn btn-outline-dark mb-5 w-25 my-5 mx-auto"
          >
            Proceed to chekout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
