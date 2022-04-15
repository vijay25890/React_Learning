import React, { useEffect } from "react";

const FunProp = (props) => {
  useEffect(() => {
    console.log("hiii");
  }, [props.data]);
  return (
    <div>
      <button onClick={() => props.data()}>Click Here</button>
    </div>
  );
};

export default FunProp;
