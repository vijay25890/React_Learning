import React, { useRef } from "react";

const UnControlledComp = () => {
  let inputRef = useRef(null);
  function submitForm(e) {
    e.preventDefault();
    console.log("input 1", inputRef.current.value);
  }
  return (
    <div>
      <h6>UnControlledComp</h6>
      <form onSubmit={submitForm}>
        <input ref={inputRef} type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UnControlledComp;
