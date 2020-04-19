import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { getProduct } from "../../actions/product";
import { connect } from "react-redux";
import Spinner from "../layouts/Spinner";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Product = ({
  match,
  getProduct,
  product: {
    loading,
    singleProduct: { _id, name, desc, price, image },
  },
  auth,
}) => {
  const classes = useStyles();
  useEffect(() => {
    getProduct(match.params.id);
  }, [getProduct, match.params.id]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className={classes.root}>
          <Button variant="contained" color="secondary" to="/homepage">
            Back to all products
          </Button>
        </div>
      )}
    </Fragment>
  );
};

Product.propTypes = {
  getProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProduct })(Product);
