import React from "react";

const childToparentData = (props) => {
  const a = "hii";
  return (
    <div>
      <h6>childToparentData</h6>
      <button onClick={() => props.data(a)}>click</button>
    </div>
  );
};

export default childToparentData;
