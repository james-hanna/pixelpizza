import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <Dashboard />
    </div>
  );
}

export default App;
