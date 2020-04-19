import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Products from "./Products";
import { Link } from "react-router-dom";
const Homepage = (props) => {
  return (
    <Fragment>
      <Products />
    </Fragment>
  );
};

Homepage.propTypes = {};

export default Homepage;
