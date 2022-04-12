import React, { useState } from "react";

const Rendering = () => {
  const [currenttab, settab] = useState("abc");
  const ab = (tab) => {
    settab(tab);
  };
  return (
    <div className="App">
      <p>jhadsbjdbjdsbdcbjcdbjdcjdcbjdjb</p>
      <button onClick={() => settab("abc")}>abc</button>
      <button onClick={() => settab("xyz")}>xyz</button>
      {currenttab === "abc" ? (
        <div>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
        </div>
      ) : (
        <div>
          <h1>byyy</h1>
          <h1>byyy</h1>
          <h1>byyy</h1>
          <h1>byyy</h1>
        </div>
      )}
    </div>
  );
};

export default Rendering;
