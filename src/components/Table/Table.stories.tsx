import { Meta, StoryFn } from "@storybook/react";
import { Table, TableHeader, TableRow, TableCell, TableFooter } from "./index";
import { TableProps } from "./Table.types";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    backgroundColor: { control: "color", defaultValue: "#ffffff" },
    borderColor: { control: "color", defaultValue: "#cccccc" },
    textColor: { control: "color", defaultValue: "#000000" },
    disabled: { control: "boolean", defaultValue: false },
  },
} as Meta<typeof Table>;

const Template: StoryFn<TableProps> = (args) => (
  <Table {...args}>{args.children}</Table>
);

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "#ffffff",
  borderColor: "#cccccc",
  textColor: "#000000",
  disabled: false,
  children: (
    <>
      <TableHeader>
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
          <TableCell>Header 3</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Row 1 - Cell 1</TableCell>
          <TableCell>Row 1 - Cell 2</TableCell>
          <TableCell>Row 1 - Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row 2 - Cell 1</TableCell>
          <TableCell>Row 2 - Cell 2</TableCell>
          <TableCell>Row 2 - Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row 3 - Cell 1</TableCell>
          <TableCell>Row 3 - Cell 2</TableCell>
          <TableCell>Row 3 - Cell 3</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
          <TableCell>Footer 3</TableCell>
        </TableRow>
      </TableFooter>
    </>
  ),
};

export const Disabled = Template.bind({});
Disabled.args = {
  backgroundColor: "#ffffff",
  borderColor: "#cccccc",
  textColor: "#000000",
  disabled: true,
  children: (
    <>
      <TableHeader>
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
          <TableCell>Header 3</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Row 1 - Cell 1</TableCell>
          <TableCell>Row 1 - Cell 2</TableCell>
          <TableCell>Row 1 - Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row 2 - Cell 1</TableCell>
          <TableCell>Row 2 - Cell 2</TableCell>
          <TableCell>Row 2 - Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row 3 - Cell 1</TableCell>
          <TableCell>Row 3 - Cell 2</TableCell>
          <TableCell>Row 3 - Cell 3</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
          <TableCell>Footer 3</TableCell>
        </TableRow>
      </TableFooter>
    </>
  ),
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  backgroundColor: "#ffffff",
  borderColor: "#cccccc",
  textColor: "#000000",
  disabled: false,
  children: (
    <TableHeader>
      <TableRow>
        <TableCell>Header 1</TableCell>
        <TableCell>Header 2</TableCell>
        <TableCell>Header 3</TableCell>
      </TableRow>
    </TableHeader>
  ),
};

export const WithCells = Template.bind({});
WithCells.args = {
  backgroundColor: "#ffffff",
  borderColor: "#cccccc",
  textColor: "#000000",
  disabled: false,
  children: (
    <tbody>
      <TableRow>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
    </tbody>
  ),
};

export const WithRows = Template.bind({});
WithRows.args = {
  backgroundColor: "#ffffff",
  borderColor: "#cccccc",
  textColor: "#000000",
  disabled: false,
  children: (
    <tbody>
      <TableRow>
        <TableCell>Row 1 - Cell 1</TableCell>
        <TableCell>Row 1 - Cell 2</TableCell>
        <TableCell>Row 1 - Cell 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row 2 - Cell 1</TableCell>
        <TableCell>Row 2 - Cell 2</TableCell>
        <TableCell>Row 2 - Cell 3</TableCell>
      </TableRow>
    </tbody>
  ),
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  backgroundColor: "#ffffff",
  borderColor: "#cccccc",
  textColor: "#000000",
  disabled: false,
  children: (
    <TableFooter>
      <TableRow>
        <TableCell>Footer 1</TableCell>
        <TableCell>Footer 2</TableCell>
        <TableCell>Footer 3</TableCell>
      </TableRow>
    </TableFooter>
  ),
};
