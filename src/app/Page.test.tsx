import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./page";

const buildComponent = () => {
  render(<Home />);
};

describe("Page", () => {
  it("Renders the page component", () => {
    buildComponent();

    const pageHeading = screen.getByRole("heading", { name: "Hello world" });

    expect(pageHeading).toBeInTheDocument();
  });
});
