import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  color: ${({ disabled, textColor }) =>
    disabled ? "#a0a0a0" : textColor || "#1e3a8a"};
  font-weight: 500;
  margin-bottom: 5px;
  display: inline-block;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
`;

export const Label: React.FC<LabelProps> = ({
  labelText = "Label Text",
  htmlFor,
  disabled = false,
  textColor,
}) => {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled} textColor={textColor}>
      {labelText}
    </StyledLabel>
  );
};
