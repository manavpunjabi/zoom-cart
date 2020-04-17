import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
//import Link from "@material-ui/core/Link";
const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: 5,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();
  const authLinks = (
    <Fragment>
      <Button href="/orders" color="inherit">
        My Orders
      </Button>

      <Button onClick={logout} href="/logout" color="inherit">
        <i className="fas fa-sign-out-alt"></i> Logout
      </Button>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <Button color="inherit" href="/login">
        Login
      </Button>
      <Button href="/register" color="inherit">
        Register
      </Button>
    </Fragment>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}

          <Typography variant="h6" className={classes.title}>
            <Button color="inherit" href="/">
              <i className="fas fa-cat"></i> zoom-cart
            </Button>
          </Typography>

          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
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
