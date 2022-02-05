import React, { useState } from "react";

const GetInputValue = () => {
  const [input, setInput] = useState(null);
  const [show, setShow] = useState(false);
  function getData(e) {
    setInput(e.target.value);
  }
  return (
    <div>
      {show ? <h1>{input}</h1> : null}
      <input type="text" onChange={getData}></input>
      <button onClick={() => setShow(true)}>show</button>
    </div>
  );
};

export default GetInputValue;
