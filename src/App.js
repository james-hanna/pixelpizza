import React from "react";
import { Routes, Route } from "react-router-dom";
import wall from "./assets/icons/trimmed-stone-wall-t.png";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  return (
    <div className="bg-repeat" style={{ backgroundImage: `url(${wall})` }}>
      <div className="flex justify-center">
        <div className="flex flex-col min-h-screen max-w-[2448px]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
