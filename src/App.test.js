import { render, screen } from "@testing-library/react";
import App from "./App";
import Contact from "./components/Contact";

test("should load contact component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
