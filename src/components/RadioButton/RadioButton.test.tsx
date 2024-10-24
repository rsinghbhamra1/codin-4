import { render, screen } from "@testing-library/react";
import { RadioButton } from "./index";

test("RadioButton is visible", () => {
  render(<RadioButton labelText="Test Radio" />);
  expect(screen.getByLabelText("Test Radio")).toBeInTheDocument();
});

test("RadioButton is disabled when disabled prop is true", () => {
  render(<RadioButton labelText="Disabled Radio" disabled />);
  const radio = screen.getByLabelText("Disabled Radio") as HTMLInputElement;
  expect(radio.disabled).toBe(true);
});
