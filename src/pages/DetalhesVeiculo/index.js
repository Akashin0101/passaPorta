import React from "react";
import {
  EditButton,
  Icon,
  InfoTitle,
  InfoWrapper,
  PlatePic,
  Wrapper,
} from "./styles";
import { Logo, Title } from "../Home/styles";
import LogoSite from "../../assets/Logo.png";
import PlacaCarro from "../../assets/Foto_Placa.jpg";
import InputButton from "../../components/InputButton";

function DetalhesVeiculo() {
  const EditIconButton = () => {
    return (
      <EditButton>
        <Icon />
      </EditButton>
    );
  };
  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          width: "100%",
          margin: "30px 0 40px 30px",
          alignItems: "center",
        }}
      >
        <Logo src={LogoSite} alt="Logo" />
        <Title>PASSA PORTA</Title>
      </div>
      <InfoWrapper>
        <PlatePic src={PlacaCarro} alt="Logo" />
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <InfoTitle>Detalhes do veículo</InfoTitle>
          <div
            style={{
              display: "flex",
              height: "fit-content",
            }}
          >
            <InputButton placeholder={"Placa"} />
            <EditIconButton />
          </div>
          <div
            style={{
              display: "flex",
              height: "fit-content",
            }}
          >
            <InputButton placeholder={"Motorista"} />
            <EditIconButton />
          </div>
          <div
            style={{
              display: "flex",
              height: "fit-content",
            }}
          >
            <InputButton placeholder={"Horário"} />
            <EditIconButton />
          </div>
          <div
            style={{
              display: "flex",
              height: "fit-content",
            }}
          >
            <InputButton placeholder={"Data"} ></InputButton>
            <EditIconButton />
          </div>
        </div>
      </InfoWrapper>
    </Wrapper>
  );
}

export default DetalhesVeiculo;
