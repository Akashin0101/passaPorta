import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Cadastro from "./pages/Cadastro";
import styled from "styled-components";

export default function Rotas() {
  return (
    <RoutesStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/Cadastro" element={<Cadastro />}></Route>
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
