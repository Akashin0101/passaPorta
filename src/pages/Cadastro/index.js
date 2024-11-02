import React, { useState } from "react";
import {
  ImgWrapper,
  Title,
  Wrapper,
  FieldsWrapper,
  CenteredForm,
  CheckboxLabel,
  CustomCheckboxWrapper,
  Link,
  ErrorMessage,
  CustomCheckbox,
  SubmitButton,
} from "./styles";
import CarrrosCadastro from "../../assets/CarrrosCadastro.jpg";
import InputButton from "../../components/InputButton";

function Cadastro() {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [acceptDataCollection, setAcceptDataCollection] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreeTerms) {
      setShowError(true);
    } else {
      setShowError(false);
      alert("Cadastro concluído com sucesso!");
    }
  };

  return (
    <Wrapper>
      <ImgWrapper>
        <img src={CarrrosCadastro} alt="Descrição" />
      </ImgWrapper>
      <FieldsWrapper>
        <Title>CADASTRO</Title>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <InputButton placeholder="Nome de Usuário" />
          <InputButton placeholder="E-mail" />
          <InputButton placeholder="Senha" />
          <InputButton placeholder="Repetir Senha" />
        </div>

        <CenteredForm onSubmit={handleSubmit}>
          <CheckboxLabel>
            <CustomCheckboxWrapper>
              <CustomCheckbox
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
              />
              Eu li e concordo com os
              <Link href="https://www.google.com" target="_blank">
                Termos de Uso.
              </Link>
            </CustomCheckboxWrapper>
          </CheckboxLabel>

          {showError && <ErrorMessage>Essa opção é obrigatória</ErrorMessage>}

          <CheckboxLabel>
            <CustomCheckboxWrapper>
              <CustomCheckbox
                checked={acceptDataCollection}
                onChange={() => setAcceptDataCollection(!acceptDataCollection)}
              />
              Aceito a coleta de informações de usuário e desempenho para
              melhoria da plataforma.
            </CustomCheckboxWrapper>
          </CheckboxLabel>

          <SubmitButton type="submit">CRIAR CONTA</SubmitButton>
        </CenteredForm>
      </FieldsWrapper>
    </Wrapper>
  );
}

export default Cadastro;
