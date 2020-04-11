import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../layouts/Login";
import Register from "../layouts/Register";
import Alert from "../layouts/Alert";
import NotFound from "../layouts/NotFound";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
