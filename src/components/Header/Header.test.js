import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header function", () => {
  describe("When its invoked", () => {
    test("Then it should render a navigation bar with an image with the alt 'Isdigram logo'", () => {
      render(<Header></Header>);
      const expectedImage = screen.getByRole("img", {
        name: "Isdigram Logo",
      });

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
