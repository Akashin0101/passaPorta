import React from "react";

import { Input, Wrapper } from "./styles";

function InputButton({ placeholder }) {
  return (
    <Wrapper>
      <Input placeholder={placeholder} />
    </Wrapper>
  );
}

export default InputButton;
