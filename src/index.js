import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import registerServiceWorker from "./registerServiceWorker";

import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Welcome from "./containers/Welcome/index";
import EmojiStory from "./containers/EmojiStory/index";
import NotFound from "./containers/NotFound/index";
import Finish from "./containers/Finish/index";
import Survey from "./containers/Survey/index";
import Gender from "./containers/Gender/index";
import ITBackground from "./containers/ITBackground/index";
import Survey2 from "./containers/survey2";

ReactDOM.render(
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/emojistory" component={EmojiStory} />
        <Route exact path="/finish" component={Finish} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/gender" component={Gender} />
        <Route exact path="/itbackground" component={ITBackground} />
        <Route exact path="/survey2" component={Survey2} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();