import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderNav from "./components/Header/HeaderNav";
import QuoteBoard from "./components/Quote/QuoteBoard";
import TotalStats from "./components/OdiStats/TotalStats";

function App() {
  return (
    <div>
      <HeaderNav />
      <div className="App">
        <QuoteBoard />

        <TotalStats />
      </div>
    </div>
  );
}

export default App;
