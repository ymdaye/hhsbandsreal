import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Staff from "./pages/Staff";
import SEVMG from "./pages/SEVMG";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/sevmg" element={<SEVMG />} />
          <Route path="/groups" element={<div className="pt-16 min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-900">Performance Groups - Coming Soon</h1></div>} />
          <Route path="/parents" element={<div className="pt-16 min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-900">Parent Information - Coming Soon</h1></div>} />
          <Route path="/payments" element={<div className="pt-16 min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-900">Payments - Coming Soon</h1></div>} />
          <Route path="/history" element={<div className="pt-16 min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-900">History - Coming Soon</h1></div>} />
          <Route path="/join" element={<div className="pt-16 min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-900">Join the Band - Coming Soon</h1></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
