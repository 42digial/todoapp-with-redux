import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/styles.css";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

import TodoApp from "./containers";
import Loading from "./components/Loading";

const { persistor, store } = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={<Loading />} persistor={persistor}>
			<TodoApp />
		</PersistGate>
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
