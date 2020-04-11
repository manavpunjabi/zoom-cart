import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {
  const authLinks = (
    <ul className="nav navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/orders">
          My Orders <span className="sr-only">(current)</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link onClick={logout} className="nav-link">
          <i className="fas fa-sign-out-alt"></i> Logout
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul className="nav navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/login">
          Login <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/register">
          Register <span className="sr-only">(current)</span>
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-1">
      <Link className="navbar-brand" to="/">
        <i class="fas fa-cat"></i> zoom-cart
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
