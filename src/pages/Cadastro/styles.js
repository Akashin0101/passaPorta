import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
export const Title = styled.h1`
  width: 100%;
  height: fit-content;
  text-align: center;
  margin-top: 80px;
  font-size: 50px;
  font-weight: 600;
  color: #fff;
  letter-spacing: +5px;
  margin-bottom: 50px;
`;
export const ImgWrapper = styled.div`
  img {
    height: 100vh;
  }
`;

export const FieldsWrapper = styled.div`
  width: 100%;
`;

export const ErrorMessage = styled.p`
  color: #db1616;
  font-size: 14px;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.button`
  padding: 15px 18px;
  background-color: #27E3F1;
  color: #200F8E;
  font-weight: 600;
  border: none;
  border-radius: 7px;
  margin-top: 20px;
  transition: all 30ms;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  &:hover {
    background-color: #0dcbd9;
  }
`;

export const CheckboxLabel = styled.label`
  color: #fffafa;
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 16px;
  transform: scale(0.9);
`;

export const CustomCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #fff;
  border-radius: 3px;
  background-color: white;
  margin-right: 8px;
  cursor: pointer;

  &:checked {
    border: 2px solid #fff;
    position: relative;
  }

  &:checked::after {
    content: "✓";
    position: absolute;
    color: #000;
    font-size: 18px;
    left: 2px;
    top: -4px;
  }
`;

export const Link = styled.a`
  font-weight: 600;
  margin-left: 2px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const CenteredForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
