import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({
  auth: {
    isAuthenticated,
    loading,
    user: { admin },
  },
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !admin && !loading ? (
        <Redirect to="/homepage" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

AdminRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AdminRoute);
