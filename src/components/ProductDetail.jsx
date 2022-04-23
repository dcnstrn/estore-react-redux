import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import DATA from "../Data";
import { useDispatch, useSelector } from "react-redux";
import { addItem, delItem, removeItem } from "../redux/actions";

const ProductDetail = () => {
  const proid = useParams();
  const proDetail = DATA.filter((x) => x.id == proid.id);
  const product = proDetail[0];
  const dispatch = useDispatch();
  const state = useSelector((state) => state.addItem);

  const exist = state.find((x) => x.id === product.id);

  const handleCart = (product) => {
    if (!exist) {
      dispatch(addItem(product));
    } else {
      dispatch(removeItem(product));
    }
  };

  return (
    <>
      <div className="cardDetail container py-5 ">
        <div className="row py-4">
          <div className="col-md-6 text-center">
            <img
              className="card-img-top productImg mb-5"
              src={`/${product.img}`}
              alt={product.title}
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-5">{product.title}</h1>

            <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
            <p className="lead">{product.desc}</p>

            {exist ? (
              <button
                className="btn btn-danger"
                onClick={() => handleCart(product)}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="btn btn-outline-dark"
                onClick={() => handleCart(product)}
              >
                Add to Cart
              </button>
            )}

            <NavLink className="btn btn-dark ms-2 px-3 py-2 my-1" to="/cart">
              Go to Cart
            </NavLink>
            {/* {product.colors && (
              <div className="cardDetail__colors">
                {product.colors.map((x) => (
                  <span
                    style={{ backgroundColor: `${x}` }}
                    className="cardDetail__color"
                  ></span>
                ))}
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
