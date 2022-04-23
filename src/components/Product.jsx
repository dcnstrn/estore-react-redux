import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DATA from "../Data";

const Product = () => {
  const [filter, setFilter] = useState(DATA);
  const filterProduct = (cat) => {
    const updatedList = DATA.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const cardItem = (item) => {
    return (
      <div className="card my-4 py-4 " key={item.id} style={{ width: "18rem" }}>
        <div className="card__img-wrapper">
          <img src={item.img} className="card-img-top" alt={item.tite} />
        </div>
        <div className="card-body text-center ">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead fw-bolder">$ {item.price}</p>
          <NavLink to={`/products/${item.id}`} className="btn btn-primary">
            Buy Now
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-black-50">Products</h1>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="buttons d-flex justify-content-center ">
            <button
              className="btn btn-outline-secondary me-2"
              onClick={() => setFilter(DATA)}
            >
              All
            </button>
            <button
              className="btn btn-outline-secondary me-2"
              onClick={() => filterProduct("iphone")}
            >
              iPhone
            </button>
            <button
              className="btn btn-outline-secondary me-2"
              onClick={() => filterProduct("macbook")}
            >
              MacBook
            </button>
            <button
              className="btn btn-outline-secondary me-2"
              onClick={() => filterProduct("watch")}
            >
              Watch
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">{filter.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
