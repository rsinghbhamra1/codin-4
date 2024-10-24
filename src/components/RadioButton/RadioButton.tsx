import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const StyledRadio = styled.input<RadioButtonProps>`
  margin-right: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const RadioLabel = styled.label<RadioButtonProps>`
  color: ${({ disabled, textColor }) =>
    disabled ? "#a0a0a0" : textColor || "#1e3a8a"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  labelText = "Radio Button",
  disabled = false,
  textColor,
  ...props
}) => {
  return (
    <RadioLabel disabled={disabled} textColor={textColor}>
      <StyledRadio type="radio" disabled={disabled} {...props} />
      {labelText}
    </RadioLabel>
  );
};
