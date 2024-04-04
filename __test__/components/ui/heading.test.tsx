import { render } from "@testing-library/react";
import { Heading } from "@/components/ui/heading";
import "@testing-library/jest-dom";

describe("Heading", () => {
  it("should render a title", () => {
    const title = "Hello World";
    const { getByRole } = render(<Heading title={title} />);
    const headerElement = getByRole("heading", { name: title });
    expect(headerElement).toBeInTheDocument();
  });
});
