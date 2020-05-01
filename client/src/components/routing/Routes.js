import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../layouts/Login";
import Register from "../layouts/Register";
import AlertDialog from "../layouts/AlertDialog";
import NotFound from "../layouts/NotFound";
import Homepage from "../Homepage/Homepage";
import AddProduct from "../product/AddProduct";
import EditProduct from "../product/EditProduct";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Product from "../product/Product";
import Navbar from "../layouts/Navbar";
const Routes = () => {
  return (
    <Fragment>
      <Navbar />
      <CssBaseline />
      <Container>
        <AlertDialog />
        <Switch>
          <AdminRoute exact path="/add-product" component={AddProduct} />
          <AdminRoute exact path="/:id/edit" component={EditProduct} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/homepage" component={Homepage} />

          <PrivateRoute exact path="/products/:id" component={Product} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Fragment>
  );
};

export default Routes;
