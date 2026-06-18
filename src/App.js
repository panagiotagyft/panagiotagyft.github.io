import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Visualization from "./pages/vizualization/Visualization";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visualization" element={<Visualization />} /
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
