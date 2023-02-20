import React from "react";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
