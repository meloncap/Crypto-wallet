import React from "react";
import loadable from "@loadable/component";
import { Route, Routes } from "react-router-dom";

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
      <Route path="/" element={<HomePage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path=":id" element={<CryptoInfoPage />} />
    </Routes>
  );
};

export default RoutesComponent;
