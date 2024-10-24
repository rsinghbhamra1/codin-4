import { render, screen } from "@testing-library/react";
import { Button } from "./index";

test("Button is visible", () => {
  render(<Button buttonText="Test Button" />);
  expect(screen.getByText("Test Button")).toBeInTheDocument();
});

test("Button background changes when disabled", () => {
  render(
    <Button buttonText="Disabled Button" disabled backgroundColor="#4ea8de" />,
  );
  const button = screen.getByText("Disabled Button");
  expect(button).toHaveStyle("background-color: #a0a0a0");
});
