import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/App.style";
import { LandingPage, WorkFlows, WorkFlow } from "./components/pages";
import { NotFound } from "./components/pages/NotFound";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/workflows" element={<WorkFlows />} />
        <Route path="/design-workflow" element={<WorkFlow />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
