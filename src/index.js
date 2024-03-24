import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/Containers/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { searchRobots, requestRobots } from "./reducers";
import "tachyons";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  searchRobots,
  requestRobots,
});
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
