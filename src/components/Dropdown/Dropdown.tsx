import React from 'react';
import styled from 'styled-components';
import { DropdownProps, Option } from './Dropdown.types';

interface StyledSelectProps {
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

const StyledSelect = styled.select.withConfig({
  shouldForwardProp: (prop) => !['backgroundColor', 'textColor'].includes(prop),
})<StyledSelectProps>`
  padding: 10px;
  border: 1px solid ${({ disabled }) => (disabled ? '#a0a0a0' : '#4ea8de')};
  border-radius: 5px;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#e0e0e0' : backgroundColor || '#ffffff'};
  color: ${({ textColor }) => textColor || '#1e3a8a'};
  width: 100%;
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  disabled = false,
  backgroundColor,
  textColor,
  ...props
}) => {
  return (
    <StyledSelect
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
      {...props}
    >
      {options.map((option: Option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};
