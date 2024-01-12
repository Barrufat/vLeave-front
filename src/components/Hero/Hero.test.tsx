import { screen } from "@testing-library/react";
import Hero from "./Hero";
import customRenderWithProviders from "../../test-utils/customRenderWithProviders";

describe("Given a Hero component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'campervan-on-the-road' in an accessible text of an image", () => {
      const expectedImageAltText = "campervan-on-the-road";

      customRenderWithProviders(<Hero />);

      const imageElement = screen.getByAltText(expectedImageAltText);

      expect(imageElement).toBeInTheDocument();
    });
  });
});
