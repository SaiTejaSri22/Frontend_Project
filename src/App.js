// App.js
import React, { useState } from "react";
import Header from "./header";
import MainBlock from "./MainBlock";
import StatisticsBlock from "./StatisticsBlock";
import Footer from "./Footer";
import { students } from "./data";

const App = () => {
  const [showStatistics, setShowStatistics] = useState(false);

  return (
    <div>
      {/* Header */}
      <Header />
      {/* Main block */}
      <MainBlock students={students} />
      {/* Toggle Statistics block */}
      <button onClick={() => setShowStatistics(!showStatistics)}>
        {showStatistics ? "Hide Statistics" : "Show Statistics"}
      </button>
      {showStatistics && <StatisticsBlock />}
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
