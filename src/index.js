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
import Questionnaire from "./containers/Questionnaire/index";
import Test from "./containers/Questionnaire/index2";

ReactDOM.render(
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/emojistory" component={EmojiStory} />
        <Route exact path="/finish" component={Finish} />
        <Route exact path="/questionnaire" component={Questionnaire} />
        <Route exact path="/test" component={Test} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
