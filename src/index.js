import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/containers/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
// ReactDOM.render(<App />, document.getElementById("root"));
