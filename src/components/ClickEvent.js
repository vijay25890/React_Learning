import React from "react";

const ClickEvent = () => {
  const click=()=> {
    alert("Hii");
  }
  return (
    <div>
      <button onClick={()=>click()}>Click Me</button>
    </div>
  );
};

export default ClickEvent; 