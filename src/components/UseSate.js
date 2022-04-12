import React, { useState } from "react";

const UseSate = () => {
  // const [data, setData] = useState("vijay");
  let ajay = "ajay";
  const hhh = () => {
    ajay = "vijay";
  };
  return (
    <div>
      <h1>{ajay}</h1>
      <button onClick={hhh}>hhh</button>
    </div>
  );
};

export default UseSate;
