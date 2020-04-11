import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductItem = ({ product: { _id, name, desc, price, image } }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{desc}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">₹ {price}</small>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
