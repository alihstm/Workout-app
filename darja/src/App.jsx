import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Greeting from "./Components/Greeting/greeting";
import GoalOpening from "./Components/Extra/goalOpening";
import Goal from "./Components/Goal/goal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/goalop" element={<GoalOpening />} />
        <Route path="/goal" element={<Goal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
