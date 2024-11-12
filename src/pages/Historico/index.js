import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Container,
  SearchBarContainer,
  SearchInput,
  Table,
  TableHeader,
  TableData,
  TableRow,
  TableBody,
  Pagination,
  PageButton,
  TableMotorista,
  TableHeaderWrapper,
} from "./styles";
import InputButton from "../../components/InputButton";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const data = [
    { placa: "ABC-1234", motorista: "José Silva", data: "2024-11-01" },
    { placa: "XYZ-5678", motorista: "Maria Souza", data: "2024-11-02" },
    { placa: "LMN-9876", motorista: "Carlos Pereira", data: "2024-11-03" },
    { placa: "DEF-1122", motorista: "Ana Lima", data: "2024-11-04" },
    { placa: "JKL-5678", motorista: "Paulo Souza", data: "2024-11-05" },
    { placa: "QRS-9876", motorista: "Ricardo Rocha", data: "2024-11-06" },
    { placa: "TUV-4321", motorista: "Lucas Santos", data: "2024-11-07" },
    { placa: "WXY-1122", motorista: "Fernanda Lima", data: "2024-11-08" },
    { placa: "PQR-2233", motorista: "Mariana Costa", data: "2024-11-09" },
    { placa: "MNO-7766", motorista: "Bruno Alves", data: "2024-11-10" },
    { placa: "STU-4532", motorista: "Renata Oliveira", data: "2024-11-11" },
    { placa: "VWX-8765", motorista: "Gustavo Souza", data: "2024-11-12" },
    { placa: "XYZ-5467", motorista: "Juliana Silva", data: "2024-11-13" },
    { placa: "BCD-5432", motorista: "Gabriel Rocha", data: "2024-11-14" },
    { placa: "MNP-6789", motorista: "Tatiane Dias", data: "2024-11-15" },
  ];

  const filteredData = data.filter(
    (item) =>
      item.placa.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.motorista.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.data.includes(searchQuery)
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Container>
      <SearchBarContainer>
        <InputButton
          width="100%"
          icon={true}
          type="text"
          placeholder="Pesquisar..."
          value={searchQuery}
          onChange={setSearchQuery}
        />
      </SearchBarContainer>
      <div style={{ maxWidth: "100%" }}>
        <TableHeaderWrapper>
          <TableHeader>PLACA</TableHeader>
          <TableHeader>MOTORISTA</TableHeader>
          <TableHeader>DATA</TableHeader>
        </TableHeaderWrapper>
        <Table>
          <TableBody>
            {currentData.map((item, index) => (
              <TableRow key={index}>
                <TableData>{item.placa}</TableData>
                <TableMotorista>{item.motorista}</TableMotorista>
                <TableData>{item.data}</TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination>
        <PageButton onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </PageButton>
        <PageButton onClick={nextPage} disabled={currentPage === totalPages}>
          Próxima
        </PageButton>
      </Pagination>
    </Container>
  );
};

export default App;
