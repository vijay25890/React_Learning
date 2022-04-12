import React, { useState } from "react";

const ClickEvent = () => {
  const [data, setData] = useState("vijay");

  const clickme = () => {
    console.log("hiii");
    setData("ajay");
  };
  return (
    <>
      <h5>{data}</h5>
      <button onClick={clickme}>Click Me</button>
    </>
  );
};

export default ClickEvent;
