import { render, screen } from "@testing-library/react";
import { Products } from "components/products/index";

test("renders Products", () => {
    render(<Products/>);

    expect(screen.getByRole("heading")).toHaveTextContent(/Products/);
});
