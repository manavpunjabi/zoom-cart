import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if log in successful
  if (isAuthenticated) {
    return <Redirect to="/homepage" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary text-center">
        {" "}
        <i className="fas fa-user"></i> Login
      </h1>
      <p className="lead">Sign in to your account</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            id="email"
            required
            placeholder="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password1">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            required
            minLength="6"
            placeholder="password"
            onChange={(e) => onChange(e)}
            id="password"
            className="form-control"
          />
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="Login"
            className="btn btn-primary text-center"
          />
          <p className="my-1">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </form>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
