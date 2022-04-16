import React, { useRef } from "react";

const UnControlledComp = () => {
  let inputRef = useRef(null);
  function submitForm(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h6>UnControlledComp</h6>
      <form onSubmit={submitForm}>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UnControlledComp;
