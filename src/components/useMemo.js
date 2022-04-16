import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const mulcc = useMemo(
    function mulc() {
      return count * 5;
    },
    [count]
  );

  return (
    <div>
      <h1>useMemo</h1>
      <h2>Count :{count}</h2>
      <h2>Item :{item}</h2>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      {mulcc}
      <button onClick={() => setItem(item * 10)}>Click Me2</button>
    </div>
  );
};

export default UseMemo;
