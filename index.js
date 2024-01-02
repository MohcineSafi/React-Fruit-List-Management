import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import App2 from "./App2";
import { legacy_createStore as createStore } from 'redux';
import Reducer from "./store/reducerRoot";
import { Provider } from "react-redux";

const store = createStore(Reducer)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
    <App2 />
  </Provider>
)