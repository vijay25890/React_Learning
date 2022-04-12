import "./App.css";
import React, { useState } from "react";

function App() {
  // const [data, setData] = useState(null);
  // function getdata(e) {
  //   console.log(e.target.value);
  //   setData(e.target.value);
  // }

  const [status, setStatus] = useState(true);
  return (
    <div className="App">
      {/* input field */}
      {/* <h1>Get input box value {data}</h1>
      <input type="text" onChange={getdata} /> */}
      {status ? <h1>Hellow world</h1> : null}
      <button onClick={() => setStatus(false)}>hide</button>
      <button onClick={() => setStatus(true)}>show</button>

      {/* hide and show toggle */}
      <button onClick={() => setStatus(!status)}>toggle</button>
    </div>
  );
}

export default App;
