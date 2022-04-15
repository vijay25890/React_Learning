import React, { useEffect } from "react";

const PassProp = (props) => {
  useEffect(() => {
    console.log("hii");
  }, []);
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default PassProp;
