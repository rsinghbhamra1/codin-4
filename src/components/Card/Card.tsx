import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["backgroundColor", "textColor", "disabled"].includes(prop),
})<{ backgroundColor?: string; textColor?: string; disabled?: boolean }>`
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? "#f0f0f0" : backgroundColor || "#ffffff"};
  color: ${({ textColor }) => textColor || "#000000"};
  border-radius: 10px;
  padding: 20px;
  box-shadow: ${({ disabled }) =>
    disabled
      ? "none"
      : "0 4px 6px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(0, 0, 0, 0.05)"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: box-shadow 0.3s;
`;

export const Card: React.FC<CardProps> = ({
  cardTitle = "Card Title",
  cardContent = "Card Content",
  disabled = false,
  backgroundColor,
  textColor,
  ...props
}) => {
  return (
    <StyledCard
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
      {...props}
    >
      <h3>{cardTitle}</h3>
      <p>{cardContent}</p>
    </StyledCard>
  );
};
