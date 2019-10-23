import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderNav from "./components/HeaderNav";
import QuoteBoard from "./components/QuoteBoard";
import TotalStats from "./components/TotalStats";

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
