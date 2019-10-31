import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderNav from "./components/Header/HeaderNav";
import QuoteBoard from "./components/Quote/QuoteBoard";
import TotalStats from "./components/OdiStats/TotalStats";
import TeamAnalysis from "./components/TeamAnalysis/TeamAnalysis";
import FooterComponent from "./components/FooterComponent/FooterComponent";

function App() {
  return (
    <div>
      <HeaderNav />
      <div className="App">
        <QuoteBoard />
        <TotalStats />
        <TeamAnalysis />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
