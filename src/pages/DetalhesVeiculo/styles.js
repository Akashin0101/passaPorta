import { MdOutlineModeEditOutline } from "react-icons/md";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const InfoWrapper = styled.div`
  display: flex;
  height: auto;
  align-items: center;
  margin: 20px 30px;
`;
export const InfoTitle = styled.div`
  font-size: 40px;
  font-weight: 400;
  color: #fff;
  letter-spacing: +5px;
  margin-bottom: 35px;
`;
export const PlatePic = styled.img`
  max-width: 50%;
  border-radius: 10px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);
`;

export const EditButton = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 15px;
  margin-top: 5px;
  background-color: #27e3f1;
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: #12d6d9;
  }

  &:focus {
    outline: none;
  }
`;
export const Icon = styled(MdOutlineModeEditOutline)`
  color: black;
  font-size: 22px;
`;
