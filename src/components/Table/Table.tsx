import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const StyledTable = styled.table.withConfig({
  shouldForwardProp: (prop) => !['backgroundColor', 'borderColor', 'textColor', 'disabled'].includes(prop),
})<{ backgroundColor: string; borderColor: string; textColor: string; disabled: boolean }>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ backgroundColor, disabled }) => (disabled ? 'darkGray' : backgroundColor)};
  color: ${({ textColor }) => textColor};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  border-radius: 8px;

  td, th {
    border: 1px solid ${({ borderColor }) => borderColor};
    padding: 8px;
    text-align: left;
    border-radius: 4px;
  }
`;

export const Table: React.FC<TableProps> = ({
  children,
  backgroundColor = '#ffffff',
  borderColor = '#cccccc',
  textColor = '#000000',
  disabled = false,
}) => {
  return (
    <TableContainer>
      <StyledTable
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        textColor={textColor}
        disabled={disabled}
      >
        {children}
      </StyledTable>
    </TableContainer>
  );
};
