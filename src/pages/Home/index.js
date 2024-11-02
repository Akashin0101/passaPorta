import React from "react";
import { ButtonsWrapper, Logo, SubText, Title, Wrapper } from "./styles";
import LogoSite from "../../assets/Logo.png";
import { SubmitButton } from "../Cadastro/styles";
import "react-multi-carousel/lib/styles.css";
import ImageSlider from "./Slider";
import { useNavigate } from "react-router-dom";

const images = [
  "https://via.placeholder.com/600x400?text=Image+1",
  "https://via.placeholder.com/600x400?text=Image+2",
  "https://via.placeholder.com/600x400?text=Image+3",
];

function Home() {
  const navigate = useNavigate();

  const handleNavigateToCadastro = () => {
    navigate("/cadastro");
  };

  const handleNavigateToLogin = () => {
    navigate("/acessar");
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
      <div className="App">
        <ImageSlider images={images} />
      </div>
      <SubText>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </SubText>
      <ButtonsWrapper>
        <SubmitButton type="button" onClick={handleNavigateToLogin}>
          LOGAR
        </SubmitButton>
        <SubmitButton type="button" onClick={handleNavigateToCadastro}>
          CADASTRO
        </SubmitButton>
      </ButtonsWrapper>
    </Wrapper>
  );
}

export default Home;
