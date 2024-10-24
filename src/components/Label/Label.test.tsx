import { render, screen } from "@testing-library/react";
import { Label } from "./index";

test("Label is visible", () => {
  render(<Label labelText="Test Label" />);
  expect(screen.getByText("Test Label")).toBeInTheDocument();
});

test("Label color changes when disabled", () => {
  render(<Label labelText="Disabled Label" disabled />);
  const label = screen.getByText("Disabled Label");
  expect(label).toHaveStyle("color: #a0a0a0");
});
