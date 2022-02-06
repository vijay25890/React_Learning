import React, { useState } from "react";

const FormValidation = () => {
  const [user, setUser] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    console.log(e.target.value);
    setUser(item);
  }
  function passHandler(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    console.log(e.target.value);
    setPassword(item);
  }
  function loginHandler(e) {
    if (user.length < 4 || password.length < 4) {
      alert("invalid data");
    } else {
      alert("all good");
    }
    e.preventDefault();
  }
  return (
    <div>
      <h1>Hellow World!</h1>
      <form onSubmit={loginHandler}>
        <input type="text" placeholder="name" onChange={userHandler} />
        {userErr ? <span>Invalid data</span> : null}
        <input type="password" placeholder="password" onChange={passHandler} />
        {passwordErr ? <span>Invalid pass</span> : null}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default FormValidation;
