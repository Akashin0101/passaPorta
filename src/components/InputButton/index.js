import { Input, Label, Wrapper, IconWrapper } from "./styles";
import { FaSearch } from "react-icons/fa"; // Importando o ícone da lupa

function InputButton({ placeholder, value, onChange, width, icon }) {
  return (
    <Wrapper>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=""
        width={width}
        icon={icon}
      />
      {icon && (
        <IconWrapper>
          <FaSearch />
        </IconWrapper>
      )}
      <Label>{placeholder}</Label>
    </Wrapper>
  );
}

export default InputButton;
