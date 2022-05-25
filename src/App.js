import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./styles/App.css"
import Navbar from "./components/common/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
