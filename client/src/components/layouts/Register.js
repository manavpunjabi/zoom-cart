import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../actions/auth";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    address: "",
  });

  const { name, email, password, password2, address } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password,
        address,
      });
    }
  };

  // Redirect if register successful
  if (isAuthenticated) {
    return <Redirect to="/homepage" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary text-center">
        {" "}
        <i className="fas fa-user"></i> Register
      </h1>
      <p className="lead">Sign up</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="email">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            id="name"
            required
            placeholder="name"
            className="form-control"
          />
        </div>
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
            minLength="6"
            required
            placeholder="password"
            onChange={(e) => onChange(e)}
            id="password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password1">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            minLength="6"
            required
            placeholder="password2"
            onChange={(e) => onChange(e)}
            id="password2"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Address</label>
          <textarea
            name="address"
            value={address}
            onChange={(e) => onChange(e)}
            id="address"
            required
            placeholder="address"
            className="form-control"
          />
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="Register"
            className="btn btn-primary text-center"
          />
          <p className="my-1">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </form>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
