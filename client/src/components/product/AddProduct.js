import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { addProduct } from "../../actions/product";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
//import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AddProduct = ({ addProduct, history }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
  });

  const { name, desc, price } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addProduct(formData, history);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add A Product
        </Typography>
        <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                value={name}
                onChange={(e) => onChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="desc"
                name="desc"
                variant="outlined"
                required
                fullWidth
                id="desc"
                label="Description"
                value={desc}
                onChange={(e) => onChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="number"
                autoComplete="price"
                name="price"
                variant="outlined"
                required
                fullWidth
                id="price"
                label="Price"
                value={price}
                onChange={(e) => onChange(e)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Add
              </Button>
            </Grid>
            <Grid item>
              <Button
                href="/homepage"
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.submit}
              >
                Go Back
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default connect(null, { addProduct })(AddProduct);
