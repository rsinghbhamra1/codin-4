import { render, screen } from "@testing-library/react";
import { Text } from "./index";

test("Text is visible", () => {
  render(<Text text="Test Text" />);
  expect(screen.getByText("Test Text")).toBeInTheDocument();
});

test("Text color changes when disabled", () => {
  render(<Text text="Disabled Text" disabled />);
  const textElement = screen.getByText("Disabled Text");
  expect(textElement).toHaveStyle("color: #a0a0a0");
});
