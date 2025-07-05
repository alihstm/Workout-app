import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Greeting from "./Components/Greeting/greeting";
import Gender from "./Components/Gender/gender";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/gender" element={<Gender />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
