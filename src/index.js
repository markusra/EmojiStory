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
import SurveyJS from "./containers/Questionnaire/surveyjs";
import Survey from "./containers/Questionnaire/index";

ReactDOM.render(
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/emojistory" component={EmojiStory} />
        <Route exact path="/finish" component={Finish} />
        <Route exact path="/surveyjs" component={SurveyJS} />
        <Route exact path="/survey" component={Survey} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
