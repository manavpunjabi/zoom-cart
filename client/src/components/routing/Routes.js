import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../layouts/Login";
import Register from "../layouts/Register";
import Alert from "../layouts/Alert";
import NotFound from "../layouts/NotFound";
import Homepage from "../Homepage/Homepage";
import PrivateRoute from "./PrivateRoute";
const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/homepage" component={Homepage} />

        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
