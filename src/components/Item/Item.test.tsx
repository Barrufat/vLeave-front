import customRenderWithProviders from "../../test-utils/customRenderWithProviders";
import Item from "./Item";
import { itemsMock } from "../../mocks/itemsMock";
import { screen } from "@testing-library/react";

describe("Given an Item component", () => {
  describe("When it recieves Grand Ágata Double", () => {
    test("Then it should show 'Grand Ágata Double' in a heading", () => {
      const expectedHeading = "Grand Ágata Double";

      customRenderWithProviders(<Item Item={itemsMock[0]} />);

      const itemElement = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(itemElement).toBeInTheDocument();
    });
  });
});
