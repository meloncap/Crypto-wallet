import React from "react";
import loadable from "@loadable/component";
import { Route, Routes, Navigate } from "react-router-dom";

import Loading from "../components/Loading";

const HomePage = loadable(() => import("../containers/HomePage"), {
  fallback: <Loading />,
});
const CryptoInfoPage = loadable(() => import("../containers/CryptoInfoPage"), {
  fallback: <Loading />,
});
const NotFoundPage = loadable(() => import("../containers/NotFoundPage"), {
  fallback: <Loading />,
});

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/404" element={<NotFoundPage />} />
      <Route path=":crypto" element={<CryptoInfoPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default RoutesComponent;
