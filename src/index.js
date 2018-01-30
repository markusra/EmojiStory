import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import registerServiceWorker from "./registerServiceWorker";

import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Welcome from "./containers/Welcome/";
import CreateEmojiStory from "./containers/EmojiStory/CreateStory/";
import EmojiStorySummary from "./containers/EmojiStory/StorySummary/";
import NotFound from "./containers/NotFound/";
import Finish from "./containers/Finish/";
import Survey from "./containers/Survey/";

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
          <Route exact path="/emojiStory" component={CreateEmojiStory} />
          <Route exact path="/summary" component={EmojiStorySummary} />
          <Route exact path="/finish" component={Finish} />
          <Route exact path="/survey" component={Survey} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();