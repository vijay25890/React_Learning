import React, { useRef, useState } from "react";
function Hoc() {
  return (
    <div className="App">
      <h1>HOC </h1>
      <HocRed cmp={Hoc2} />
      <HOCBlue cmp={Hoc2} />
    </div>
  );
}
export function HocRed(props) {
  return (
    <h2 style={{ backgroundColor: "red", width: 100 }}>
      Red
      <props.cmp />
    </h2>
  );
}

export function HOCBlue(props) {
  return (
    <h2 style={{ backgroundColor: "blue", width: 100 }}>
      blue <props.cmp />
    </h2>
  );
}
export function Hoc2() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}

export default Hoc;
