import { screen } from "@testing-library/react";
import customRenderWithProviders from "../../test-utils/customRenderWithProviders";
import ItemsList from "./ItemsList";

describe("Given a ItemsList", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Shop' in a text", () => {
      const expectedText = "Shop";

      customRenderWithProviders(<ItemsList />);

      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });
});
