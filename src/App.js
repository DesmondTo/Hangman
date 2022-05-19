import React, { Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingPage from "./pages/LoadingPage";
const GamePage = React.lazy(() => import("./pages/GamePage"));
const GameRulePage = React.lazy(() => import("./pages/GameRulePage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<GamePage />} />
          <Route path="game-rule" element={<GameRulePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
