import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import ChildToparentData from "./components/childToparentData";
import { Button } from "react-bootstrap";
import UseMemo from "./components/useMemo";
import UseRef from "./components/UseRef";
import ControlledComp from "./components/ControlledComp";
import UnControlledComp from "./components/UnControlledComp";
import Hoc, { Hoc2, HocRed, HOCBlue } from "./components/Hoc";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  // const [data, setData] = useState(null);
  // function getdata(e) {
  //   console.log(e.target.value);
  //   setData(e.target.value);
  // }

  const [status, setStatus] = useState(true);
  function add(a) {
    alert(a);
  }

  return (
    <div className="App">
      {/* input field */}
      {/* <h1>Get input box value {data}</h1>
      <input type="text" onChange={getdata} /> */}
      {/* {status ? <h1>Hellow world</h1> : null}
      <Button onClick={() => setStatus(false)}>hide</Button>
      <Button onClick={() => setStatus(true)}>show</Button>

      hide and show toggle
      <Button onClick={() => setStatus(!status)}>toggle</Button>
      <h6>data transfering</h6>
      <ChildToparentData data={add} />
      <UseMemo />
      <UseRef />
      <ControlledComp />
      <UnControlledComp /> */}
      {/* <Hoc />
      <Hoc2 />
      <HocRed />
      <HOCBlue /> */}
      <BrowserRouter>
        <Link to="/home">Home Page</Link>
        <Link to="/about">about Page</Link>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
