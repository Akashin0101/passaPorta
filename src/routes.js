import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Cadastro from "./pages/Cadastro";
import styled from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import DetalhesVeiculo from "./pages/DetalhesVeiculo";
import Historico from "./pages/Historico";

export default function Rotas() {
  return (
    <RoutesStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/detalhesveiculo" element={<DetalhesVeiculo />}></Route>
          <Route path="/Historico" element={<Historico />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </RoutesStyle>
  );
}

export const RoutesStyle = styled.div`
  background: rgb(8, 174, 158);
  background: linear-gradient(
    180deg,
    rgba(8, 174, 158, 1) 0%,
    rgba(56, 43, 232, 1) 85%
  );
`;
