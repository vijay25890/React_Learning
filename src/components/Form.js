import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("hii");
  const [interrest, setinterrest] = useState("");
  const [tnc, settnc] = useState(false);
  function handleData(e) {
    e.preventDefault();
    console.log(name);
  } 
  return (
    <div>
      <h1>Hellow</h1>
      <form onSubmit={handleData}>
        <input
          type="text"
          value={name}
          placeholder="Enter name "
          onChange={(e) => setName(e.target.value)}
        />
        <select onChange={(e) => setinterrest(e.target.value)}>
          <option>A</option>
          <option>B</option>
        </select>
        <input
          type="checkbox"
          onChange={(e) => settnc(e.target.checked)}
        ></input>
        agree with the terms
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
