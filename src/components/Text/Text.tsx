import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.span<TextProps>`
  display: inline-block;
  color: ${({ disabled, textColor }) =>
    disabled ? "#a0a0a0" : textColor || "#000000"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  border-radius: 5px;
  padding: 5px;
`;

export const Text: React.FC<TextProps> = ({
  text = "Sample Text",
  disabled = false,
  textColor,
}) => {
  return (
    <StyledText disabled={disabled} textColor={textColor}>
      {text}
    </StyledText>
  );
};
