import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Staff from "./pages/Staff";
import StaffMember from "./pages/StaffMember";
import SEVMG from "./pages/SEVMG";
import PerformanceGroups from "./pages/PerformanceGroups";
import Parents from "./pages/Parents";
import Payments from "./pages/Payments";
import History from "./pages/History";
import Students from "./pages/Students";
import News from "./pages/News";
import Sponsors from "./pages/Sponsors";
import JoinBand from "./pages/JoinBand";
import GuardResources from "./pages/GuardResources";
import PercussionResources from "./pages/PercussionResources";
import WindsResources from "./pages/WindsResources";
import useScrollToTop from "./hooks/useScrollToTop";

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

function ScrollToTop() {
  useScrollToTop();
  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/staff/:staffSlug" element={<StaffMember />} />
        <Route path="/sevmg" element={<SEVMG />} />
        <Route path="/groups" element={<PerformanceGroups />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/history" element={<History />} />
        <Route path="/students" element={<Students />} />
        <Route path="/news" element={<News />} />
        <Route path="/sponsors" element={<Sponsors />} />
        
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
        
        <Route path="/join" element={<JoinBand />} />
        <Route path="/guard-resources" element={<GuardResources />} />
        <Route path="/percussion-resources" element={<PercussionResources />} />
        <Route path="/winds-resources" element={<WindsResources />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
