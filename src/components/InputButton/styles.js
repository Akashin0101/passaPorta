import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 35px;
`;

export const Input = styled.input`
  width: 400px;
  height: 51px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
  outline: none;
  font-size: 18px;

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
    top: -20px;
    font-size: 16px;
    color: #fff;
  }
`;
