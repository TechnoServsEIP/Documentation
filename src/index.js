import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import TechnicalDocPage from "views/Blog/TechnicalDocumentation/TechnicalDocPage.js"
import UserDocPage from "views/Blog/UserDocumentation/UserDocPage.js"

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/documentation/technical" component={TechnicalDocPage}/>
      <Route path="/documentation/user" component={UserDocPage}/>
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
