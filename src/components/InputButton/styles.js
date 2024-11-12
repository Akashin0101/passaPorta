import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 35px;
`;

export const Input = styled.input`
  width: ${(props) => props.width || "400px"};
  max-width: 100%;
  height: 51px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
  outline: none;
  font-size: 18px;
  padding-left: 15px;
  padding-right: 40px; /* Ajuste para garantir espaço para o ícone sem cortá-lo */
  
  &::placeholder {
    color: transparent;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 15px;
  top: 15px;
  font-size: 18px;
  color: gray;
  transition: 0.15s ease all;
  pointer-events: none;
  letter-spacing: +2px;

  ${Input}:focus + &,
  ${Input}:not(:placeholder-shown) + & {
    top: -22px;
    font-size: 18px;
    color: #fff;
    text-shadow:
      0.02em 0 black,
      0 0.02em black,
      -0.02em 0 black,
      0 -0.02em black;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #076FA9;
  font-size: 25px; 
  pointer-events: none;
  z-index: 1;
`;
