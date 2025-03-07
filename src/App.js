import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Sources from "./pages/sources/Sources";
import Visualization from "./pages/vizualization/Visualization";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Router basename="/m126-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
