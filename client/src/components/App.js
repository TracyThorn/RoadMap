import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import Header from "../components/header/Header";
import "../../scss/_custom.scss";

function App() {
  return (
    <div>
      <Header />
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("root"));