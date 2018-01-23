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

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import configureStore from "./utils/configureStore";
let { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/emojistory" component={EmojiStory} />
          <Route exact path="/finish" component={Finish} />
          <Route exact path="/questionnaire" component={Questionnaire} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
