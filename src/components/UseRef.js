import React, { useRef } from "react";

const UseRef = () => {
  let inRef = useRef(null);
  function handleInput() {
    console.log("hiii");
    inRef.current.value = "100";
    inRef.current.focus();
    inRef.current.style.color = "red";
  }
  return (
    <div>
      <h6>UseRef</h6>
      <input type="text" ref={inRef} />
      <button onClick={handleInput}>Handle Input</button>
    </div>
  );
};

export default UseRef;
