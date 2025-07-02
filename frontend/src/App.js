import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Staff from "./pages/Staff";
import SEVMG from "./pages/SEVMG";
import PerformanceGroups from "./pages/PerformanceGroups";
import Parents from "./pages/Parents";
import Payments from "./pages/Payments";
import History from "./pages/History";

// Fundraiser pages
import Fundraisers from "./pages/Fundraisers";
import CraftFair from "./pages/CraftFair";
import GolfTournament from "./pages/GolfTournament";
import HAwkwardAsk from "./pages/HAwkwardAsk";

// Ensemble pages
import SymphonicBand from "./pages/ensembles/SymphonicBand";
import WindEnsemble from "./pages/ensembles/WindEnsemble";
import MarchingBand from "./pages/ensembles/MarchingBand";
import JazzBand from "./pages/ensembles/JazzBand";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/sevmg" element={<SEVMG />} />
          <Route path="/groups" element={<PerformanceGroups />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/history" element={<History />} />
          
          {/* Fundraiser routes */}
          <Route path="/fundraisers" element={<Fundraisers />} />
          <Route path="/fundraisers/craft-show" element={<CraftFair />} />
          <Route path="/fundraisers/golf" element={<GolfTournament />} />
          <Route path="/hawkward-ask" element={<HAwkwardAsk />} />
          
          {/* Ensemble routes */}
          <Route path="/ensembles/symphonic-band" element={<SymphonicBand />} />
          <Route path="/ensembles/wind-ensemble" element={<WindEnsemble />} />
          <Route path="/ensembles/marching-band" element={<MarchingBand />} />
          <Route path="/ensembles/jazz-band" element={<JazzBand />} />
          
          <Route path="/join" element={<div className="pt-16 min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-900">Join the Band - Coming Soon</h1></div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
