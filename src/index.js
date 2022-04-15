import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ClickEvent from "./components/ClickEvent";
import State from "./components/State";
import Props from "./components/Props";
import GetInputValue from "./components/GetInputValue";
import PassProp from "./components/passProp";
import Form from "./components/Form";
import FormValidation from "./components/FormValidation";
import Rendering from "./components/Rendering";
import FunctionAsProps from "./components/FunctionAsProps";
import UseSate from "./components/UseSate";
import FunProp from "./components/FunProp";
import Map from "./components/Map";
import Nestedmap from "./components/Nestedmap";
import "bootstrap/dist/css/bootstrap.min.css";

function click() {
  alert("hiiii");
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Rendering />
    <ClickEvent />
    <State />
    <Props name={"vijay"} email={"jhsj"} />
    <GetInputValue />
    <Form />
    <FormValidation />
    <FunctionAsProps data={click} name={"vijay"} />
    <UseSate /> */}
    {/* <Form />
    <Rendering /> */}
    <PassProp name="vijay" />
    <FunProp data={click} />
    <Map />
    <Nestedmap />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
