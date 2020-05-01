import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Typography, Avatar, Grid, Box, Paper } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../../images/icon.jpg";
import { makeStyles } from "@material-ui/core/styles";
import image from "../../images/background.jpg";
import Particles from "react-particles-js";
import LandingInner from "./LandingInner";

const useStyles = makeStyles({
  particlesCanvas: {},
});

const Landing = ({ isAuthenticated }) => {
  const classes = useStyles();
  if (isAuthenticated) {
    return <Redirect to="/homepage" />;
  }
  return (
    <>
      <div className="landing">
        <LandingInner />
        <Particles
          canvasClassName={classes.particlesCanvas}
          params={{
            particles: {
              number: {
                value: 65,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 1,
                  color: "tomato",
                },
              },
              size: {
                value: 8,
                random: true,
                anim: {
                  enable: true,
                  speed: 6,
                  size_min: 0.1,
                  sync: true,
                },
              },
              opacity: {
                value: 1,
                random: true,
                animation: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: true,
                },
              },
            },
          }}
        />
      </div>
    </>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
