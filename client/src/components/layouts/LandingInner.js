import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  Typography,
  Avatar,
  Grid,
  Box,
  Paper,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Typed from "react-typed";
import avatar from "../../images/icon.jpg";
import { makeStyles } from "@material-ui/core/styles";
import image from "../../images/background.jpg";
import Particles from "react-particles-js";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "turquoise",
  },
  subtitle: {
    color: "#42a5f5",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    // width: "100%",
    // height: "100vh",
    textAlign: "center",
    zIndex: 1,
  },
}));

const LandingInner = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} />
      </Grid>

      <Typography className={classes.title} variant="h4">
        <Typed strings={["zoom cart"]} typeSpeed={100} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Electronics",
            "Mobiles",
            "Large Appliances",
            "Shoes",
            "Watches",
            "and much more...",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
      <Box>
        <ButtonGroup
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
        >
          <Box>
            <Button variant="contained" color="primary" href="/login">
              Login
            </Button>
          </Box>
          <Box pl={3}>
            <Button variant="contained" color="secondary" href="/register">
              Register
            </Button>
          </Box>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

LandingInner.propTypes = {};

export default LandingInner;
