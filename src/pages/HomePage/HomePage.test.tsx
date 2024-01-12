import { screen } from "@testing-library/react";
import customRenderWithProviders from "../../test-utils/customRenderWithProviders";
import HomePage from "./HomePage";

describe("Given a HomePage", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'VLeave' in a text", () => {
      const expectedText = "VLeave";

      customRenderWithProviders(<HomePage />);

      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });
});
