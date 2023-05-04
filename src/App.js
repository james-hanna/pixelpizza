import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import wall from "./assets/icons/trimmed-stone-wall-t.png";

function App() {
  return (
    <div className="bg-repeat" style={{ backgroundImage: `url(${wall})` }}>
      <div className="flex justify-center">
        <div className="flex flex-col min-h-screen max-w-[2448px]">
          <Navbar />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
