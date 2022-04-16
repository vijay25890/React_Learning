import React, { useState } from "react";

const ControlledComp = () => {
  const [val, setValue] = useState("");
  function fun(e) {
    setValue(e.target.value);
  }
  return (
    <div>
      <h6>ControlledComp</h6>
      <input type="text" value={val} onChange={(e) => fun(e)} />
      <p>{val}</p>
    </div>
  );
};

export default ControlledComp;
