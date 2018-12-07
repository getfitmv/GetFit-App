import React from "react";
import { Switch, Route } from "react-router-dom";
import RegisterLogin from "./Components/Register_login";
import Register from "./Components/Register_login/Register";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const BaseRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login/" component={RegisterLogin} />
      </Switch>
    </Router>
  );
};

export default BaseRouter;
