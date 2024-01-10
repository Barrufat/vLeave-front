import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("It should show 'VLeave 🚎' in a heading", () => {
      const expectedHeadingText = "VLeave 🚎";

      render(<App />);

      const headingElement = screen.getByText(expectedHeadingText);

      expect(headingElement).toBeInTheDocument();
    });
  });
});
