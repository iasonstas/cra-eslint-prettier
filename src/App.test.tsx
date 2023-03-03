import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders App component without errors", () => {
    render(<App />);
  });

  test("renders Navbar", () => {
    render(<App />);
    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();
  });

  test("renders Home", () => {
    const { getByTestId } = render(<App />);
    const home = getByTestId("home");
    expect(home).toBeInTheDocument();
  });
});
