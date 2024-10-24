import { render, screen } from "@testing-library/react";
import { HeroImage } from "./index";

test("HeroImage is visible", () => {
  render(
    <HeroImage
      backgroundImage="https://picsum.photos/1920/1080"
      heroText="Test Hero"
    />,
  );
  expect(screen.getByText("Test Hero")).toBeInTheDocument();
});

test("HeroImage opacity changes when disabled", () => {
  render(
    <HeroImage
      backgroundImage="https://picsum.photos/1920/1080"
      heroText="Disabled Hero"
      disabled
      data-testid="hero-image"
    />,
  );

  const hero = screen.getByTestId("hero-image");
  expect(hero).toHaveStyle("opacity: 0.6");
});
