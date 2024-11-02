import React, { useState } from "react";
import {
  ImgWrapper,
  Title,
  Wrapper,
  FieldsWrapper,
  Link,
  SubmitButton,
} from "../Cadastro/styles";
import CarrrosCadastro from "../../assets/CarrrosCadastro.jpg";
import InputButton from "../../components/InputButton";

function Login() {
  return (
    <Wrapper>
      <ImgWrapper>
        <img src={CarrrosCadastro} alt="Descrição" />
      </ImgWrapper>
      <FieldsWrapper>
        <Title>LOGIN</Title>

        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <InputButton placeholder="E-mail" />
          <InputButton placeholder="Senha" />
        </div>
        <div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <SubmitButton type="submit">ENTRAR</SubmitButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "20px",
              color: "white",
              fontSize: "14px",
            }}
          >
            <Link
              to="/esqueci-minha-senha"
              style={{
                textDecoration: "none",
                color: "lightcyan",
                marginBottom: "10px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Esqueci minha senha
            </Link>
            <span>
              Não possui uma conta?{" "}
              <Link
                to="/cadastro"
                style={{
                  textDecoration: "none",
                  color: "lightcyan",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                CADASTRE-SE
              </Link>
            </span>
          </div>
        </div>
      </FieldsWrapper>
    </Wrapper>
  );
}

export default Login;
