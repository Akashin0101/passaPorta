import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  min-height: 100vh;
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  color: #fff;
  max-width: 800px;
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
  border-collapse: collapse;

  th {
    border-spacing: 10px 0;
  }

  td:nth-child(1) {
    border-bottom: 2px solid #27e1f0;
    border-right: 2px solid #27e1f0;
  }
  td:nth-child(2) {
    border-bottom: 2px solid #27e1f0;
    border-left: 2px solid #27e1f0;
    border-right: 2px solid #27e1f0;
  }
  td:nth-child(3) {
    border-bottom: 2px solid #27e1f0;
    border-left: 2px solid #27e1f0;
  }
`;
export const TableHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TableHeader = styled.div`
  text-align: center;
  letter-spacing: +2px;
  border: solid 2px #27e1f0;
  color: white;
  font-size: 20px;
  width: 30%;
  font-weight: 400;
  padding: 15px 25px;
  border-radius: 10px;
  text-shadow: 0.01em 0 black, 0 0.01em black, -0.01em 0 black, 0 -0.01em black;
`;

export const TableData = styled.td`
  padding: 12px 50px;
  font-size: 15px;
  text-align: center;
  letter-spacing: +1px;
`;

export const TableMotorista = styled(TableData)``;

export const TableRow = styled.tr``;

export const TableBody = styled.tbody`
  max-height: 400px;
  overflow-y: auto;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 16px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    color: #666;
  }

  &:hover {
    background-color: #0056b3;
  }

  &:disabled:hover {
    background-color: #ccc;
  }
`;
