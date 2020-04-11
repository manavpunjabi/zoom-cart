import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layouts/Spinner";
import ProductItem from "./ProductItem";
import { getProducts } from "../../actions/product";
const Products = ({ getProducts, product: { loading, products } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="large text-primary">Products</div>
          <p className="lead">
            Browse our catalogue of over a million products
          </p>
          <div className="card-deck">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductItem key={product._id} product={product} />
              ))
            ) : (
              <h4>No products found</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
Products.propTypes = {
  product: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProducts })(Products);
