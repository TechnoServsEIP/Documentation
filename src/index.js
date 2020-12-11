import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import TechnicalDocPage from "views/Blog/TechnicalDocumentation/GettingStartedTech.js";
import API from 'views/Blog/TechnicalDocumentation/API.js';
import Architecture from 'views/Blog/TechnicalDocumentation/Architecture.js';
import ComponentsAndSolution from 'views/Blog/TechnicalDocumentation/ComponentsAndSolution.js';
import Deployment from 'views/Blog/TechnicalDocumentation/Deployment.js';
import Norms from 'views/Blog/TechnicalDocumentation/Norms.js';
import Technologies from 'views/Blog/TechnicalDocumentation/Technologies.js';
import Test from 'views/Blog/TechnicalDocumentation/Test.js';
import Tools from 'views/Blog/TechnicalDocumentation/Tools.js';
import FAQ from "views/Blog/FAQ/FAQ.js";
import GettingStartedUser from "views/Blog/UserDocumentation/GettingStartedUser.js";
import Register from "views/Blog/UserDocumentation/Register.js";
import Login from "views/Blog/UserDocumentation/Login.js";
import CreateServer from "views/Blog/UserDocumentation/CreateServer.js"
import ConnectToServer from "views/Blog/UserDocumentation/ConnectToServer.js"

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
        <Route path="/documentation/getting-started-technical" component={TechnicalDocPage}/>
        <Route path="/documentation/api" component={API}/>
        <Route path="/documentation/architecture" component={Architecture}/>
        <Route path="/documentation/components-and-solution" component={ComponentsAndSolution}/>
        <Route path="/documentation/deployment" component={Deployment}/>
        <Route path="/documentation/norms" component={Norms}/>
        <Route path="/documentation/technologies" component={Technologies}/>
        <Route path="/documentation/test" component={Test}/>
        <Route path="/documentation/tools" component={Tools}/>
        <Route path="/documentation/getting-started-user" component={GettingStartedUser}/>
        <Route path="/documentation/register" component={Register}/>
        <Route path="/documentation/login" component={Login}/>
        <Route path="/documentation/create-server" component={CreateServer}/>
        <Route path="/documentation/connect-to-server" component={ConnectToServer}/>
        <Route path="/faq" component={FAQ}/>
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
