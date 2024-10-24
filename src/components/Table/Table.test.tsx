import { render } from '@testing-library/react';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './index';

test('Table is visible', () => {
  const { getByText } = render(
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );

  expect(getByText('Header 1')).toBeInTheDocument();
  expect(getByText('Cell 1')).toBeInTheDocument();
  expect(getByText('Footer 1')).toBeInTheDocument();
});

test('Table background changes when disabled', () => {
  const { container } = render(
    <Table disabled backgroundColor="#ffffff">
      <TableHeader>
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );

  const tableElement = container.querySelector('table');

  expect(tableElement).toHaveStyle('background-color: darkGray');
});