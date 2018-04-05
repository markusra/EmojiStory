import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import registerServiceWorker from "./registerServiceWorker";

import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import CreateEmojiStory from "./containers/EmojiStory/CreateStory";
import StorySummary from "./containers/EmojiStory/StorySummary";
import Login from "./containers/EmojiStory/Login";
import Finish from "./containers/Finish";
import StartScreen from "./containers/StartScreen";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import configureStore from "./utils/configureStore";
let { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={StartScreen} />
          <Route exact path="/emojiStory" component={CreateEmojiStory} />
          <Route exact path="/summary" component={StorySummary} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/finish" component={Finish} />
          <Route component={CreateEmojiStory} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
