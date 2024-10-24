import { render, screen } from "@testing-library/react";
import { Card } from "./index";

test("Card is visible", () => {
  render(<Card cardTitle="Test Title" cardContent="Test Content" />);
  expect(screen.getByText("Test Title")).toBeInTheDocument();
  expect(screen.getByText("Test Content")).toBeInTheDocument();
});

test("Card background changes when disabled", () => {
  render(
    <Card
      cardTitle="Disabled Title"
      cardContent="Disabled Content"
      disabled
      backgroundColor="#ffffff"
      data-testid="card"
    />,
  );

  const card = screen.getByTestId("card");
  expect(card).toHaveStyle("background-color: #f0f0f0");
});
