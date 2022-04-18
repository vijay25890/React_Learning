import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <Link to="/home">Home Page</Link>
      <Link to="/about">about Page</Link>
    </div>
  );
};

export default Nav;
