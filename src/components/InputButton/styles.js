import styled from "styled-components";

export const Input = styled.input`
  width: 400px;
  height: 51px;
  padding-left: 15px;
  margin-bottom: 35px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
  outline: none;
  line-height: 50px !important;
  font-size: 18px;
  &::placeholder {
    color: gray;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
