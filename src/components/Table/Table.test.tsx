import { render, screen } from "@testing-library/react";
import { Table, TableHeader, TableRow, TableCell, TableFooter } from "./index";

test("Table is visible", () => {
  render(
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
    </Table>,
  );

  expect(screen.getByText("Header 1")).toBeInTheDocument();
  expect(screen.getByText("Cell 1")).toBeInTheDocument();
  expect(screen.getByText("Footer 1")).toBeInTheDocument();
});

test("Table background changes when disabled", () => {
  render(
    <Table disabled backgroundColor="#ffffff" data-testid="table">
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
    </Table>,
  );

  const tableElement = screen.getByTestId("table");
  expect(tableElement).toHaveStyle("background-color: rgb(169, 169, 169)");
});
