import { screen } from "@testing-library/react";
import App from "./App";
import customRenderWithProviders from "../../test-utils/customRenderWithProviders";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("It should show 'VLeave' in a heading", () => {
      const expectedHeadingText = "VLeave";

      customRenderWithProviders(<App />);

      const headingElement = screen.getByText(expectedHeadingText);

      expect(headingElement).toBeInTheDocument();
    });
  });
});
