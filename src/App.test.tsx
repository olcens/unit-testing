import { render } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
    render(<App />);
});

test("that jest is working", () => {
    expect(true).toBe(true)
});
