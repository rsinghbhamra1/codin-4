import { render, screen } from "@testing-library/react";
import { Img } from "./index";

test("Img is visible", () => {
  render(<Img src="https://picsum.photos/1920/1080" altText="Test Image" />);
  expect(screen.getByAltText("Test Image")).toBeInTheDocument();
});

test("Img opacity changes when disabled", () => {
  render(
    <Img
      src="https://picsum.photos/1920/1080"
      altText="Disabled Image"
      disabled
    />,
  );
  const img = screen.getByAltText("Disabled Image");
  expect(img).toHaveStyle("opacity: 0.6");
});
