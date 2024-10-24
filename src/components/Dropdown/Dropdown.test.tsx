import { render, screen } from "@testing-library/react";
import { Dropdown } from "./index";

const options = [{ label: "Option 1", value: "1" }];

test("Dropdown is visible", () => {
  render(<Dropdown options={options} />);
  expect(screen.getByRole("combobox")).toBeInTheDocument();
});

test("Dropdown background changes when disabled", () => {
  render(<Dropdown options={options} disabled backgroundColor="#ffffff" />);
  const select = screen.getByRole("combobox");
  expect(select).toHaveStyle("background-color: #e0e0e0");
});
