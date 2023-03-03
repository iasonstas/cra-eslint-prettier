import { render } from "@testing-library/react";
import FbRepositoryLabel from "./FbRepositoryLabel";

describe("FbRepositoryLabel component", () => {
  it("renders the component with small prop", () => {
    const { getByText, getByTestId } = render(<FbRepositoryLabel small />);
    const fbSvg = getByTestId("fb-svg");
    const repository = getByText("Repository");
    expect(fbSvg).toBeInTheDocument();
    expect(repository).toBeInTheDocument();
    expect(repository).toHaveStyle("font-size: 20px");
  });

  it("renders the component without small prop", () => {
    const { getByText, getByTestId } = render(<FbRepositoryLabel small={false} />);
    const fbSvg = getByTestId("fb-svg");
    const repository = getByText("Repository");

    expect(fbSvg).toBeInTheDocument();
    expect(repository).toBeInTheDocument();
    expect(repository).toHaveStyle("font-size: 40px");
  });
});
