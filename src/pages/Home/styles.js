import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Title = styled.h1`
  height: fit-content;
  font-size: 80px;
  font-weight: 400;
  color: #fff;
  letter-spacing: +5px;
`;
export const SubText = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  letter-spacing: +1px;
  margin: 20px 0 50px 0;
  span {
    width: 75%;
  }
`;
export const Imagem = styled.img`
  width: fit-content;
  
`;
export const Logo = styled.img`
  width: 152px;
  height: 80px;
  margin-right: 10px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  button {
    margin: 0 25px;
  }
`;
