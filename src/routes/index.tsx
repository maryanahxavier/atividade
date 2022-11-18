import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AdmPaisagemPage,
  AdmPaisagemStorePage,
  CadastrarPage,
  HomePage,
  LayoutPage,
  LoginPage
} from "pages";
import ProtectedRoute from "./ProtectedRoute";
const Rotas = () => {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastrar" element={<CadastrarPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adm" element={<ProtectedRoute />}>
          <Route path="message" element={<AdmPaisagemPage />} />
          <Route path="message/:id" element={<AdmPaisagemStorePage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Rotas;

