import { useState } from "react";
import { Input, Label, Wrapper } from "./styles";

function InputButton({ placeholder }) {
  const [value, setValue] = useState("");

  return (
    <Wrapper>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder=""
      />
      <Label>{placeholder}</Label>
    </Wrapper>
  );
}

export default InputButton;
