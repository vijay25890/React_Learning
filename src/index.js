import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ClickEvent from "./components/ClickEvent";
import State from "./components/State";
import Props from "./components/Props";
import GetInputValue from "./components/GetInputValue";
import Form from "./components/Form";
import FormValidation from "./components/FormValidation";
import Rendering from "./components/Rendering";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Rendering />
    <ClickEvent />
    <State />
    <Props name={"vijay"} email={"jhsj"} />
    <GetInputValue />
    <Form />
    <FormValidation />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
