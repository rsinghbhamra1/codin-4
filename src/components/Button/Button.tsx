import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['backgroundColor', 'textColor', 'disabled'].includes(prop),
})<ButtonProps>`
  background-color: ${(props) => (props.disabled ? '#a0a0a0' : props.backgroundColor || '#4ea8de')};
  color: ${(props) => props.textColor || '#ffffff'};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;
`;

export const Button: React.FC<ButtonProps> = ({
  buttonText = 'Button Text',
  disabled = false,
  onClick,
  backgroundColor,
  textColor,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {buttonText}
    </StyledButton>
  );
};
