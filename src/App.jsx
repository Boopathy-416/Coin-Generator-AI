import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/LandindPage/landing";
import CreateTokenPage from "./components/sections/tokensection";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create-token" element={<CreateTokenPage />} />
      </Routes>
    </Router>
  );
}

export default App;
