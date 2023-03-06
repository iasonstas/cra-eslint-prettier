import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders App component without errors", () => {
    render(<App />);
  });

  it("renders Navbar", () => {
    render(<App />);
    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();
  });

  it("renders Home", () => {
    render(<App />);
    const home = screen.queryByTestId("home");
    expect(home).toBeInTheDocument();
  });
});
