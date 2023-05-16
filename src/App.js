import React from "react";
import { Routes, Route } from "react-router-dom";
import wall from "./assets/icons/trimmed-stone-wall-t.png";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { AuthProvider } from "./AuthContext";
import Order from "./components/Order";
import Menu from "./components/Menu";
import Locations from "./components/Locations";

function App() {
  return (
    <AuthProvider>
      <div className="w-screen xsm:h-[90px] sm:h-[60px] md:h-[60px] top-0 left-0 "></div>
      <div className="bg-repeat" style={{ backgroundImage: `url(${wall})` }}>
        <div className="flex justify-center">
          <div className="flex flex-col min-h-screen max-w-[2448px]">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/order" element={<Order />}></Route>
              <Route path="/menu" element={<Menu />}></Route>
              <Route path="/locations" element={<Locations />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
