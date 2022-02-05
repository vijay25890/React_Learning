import React, { useState } from "react";

const State = () => {
  const [name, setname] = useState("Vijay");
  function change() {
    setname("Ajay");
  }
  return (
    <div>
      <h1
        onClick={() => {
          change();
        }}
      >
        {name}
      </h1>
    </div>
  );
};

export default State;
