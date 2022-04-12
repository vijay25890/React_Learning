import React, { useState } from "react";

const FunctionAsProps = (props) => {
  return (
    <div>
      <button onClick={props.data}>click me</button>
      {props.name}
    </div>
  );
};

export default FunctionAsProps;
