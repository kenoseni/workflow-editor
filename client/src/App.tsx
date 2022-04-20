import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/App.style";
import { LandingPage, Workflows, Workflow } from "./components/pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/workflows" element={<Workflows />} />
        <Route path="/design-workflow" element={<Workflow />} />
      </Routes>
    </>
  );
}

export default App;
