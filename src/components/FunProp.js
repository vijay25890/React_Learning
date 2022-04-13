import React from "react";

const FunProp = (props) => {
  return (
    <div>
      <button onClick={() => props.data()}>Click Here</button>
    </div>
  );
};

export default FunProp;
