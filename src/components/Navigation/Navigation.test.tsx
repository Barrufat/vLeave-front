import { screen } from "@testing-library/react";
import customRenderWithProviders from "../../test-utils/customRenderWithProviders";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Shop' in an accessible text", () => {
      const expectedAccessibleText = "Shop";

      customRenderWithProviders(<Navigation />);

      const linkElement = screen.getByRole("link", {
        name: expectedAccessibleText,
      });

      expect(linkElement).toBeInTheDocument();
    });
  });
});
