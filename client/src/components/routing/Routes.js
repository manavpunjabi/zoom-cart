import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../layouts/Login";
import Register from "../layouts/Register";
import AlertDialog from "../layouts/AlertDialog";
import NotFound from "../layouts/NotFound";
import Homepage from "../Homepage/Homepage";
import AddProduct from "../product/AddProduct";
import PrivateRoute from "./PrivateRoute";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Routes = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container>
        <AlertDialog />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/homepage" component={Homepage} />
          <PrivateRoute exact path="/add-product" component={AddProduct} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Fragment>
  );
};

export default Routes;
