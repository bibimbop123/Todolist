import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

test("renders add a new todo input", () => {
  render(<App />);
  const linkElement = screen.queryByPlaceholderText(/Add a new todo/i);
  expect(linkElement).toBeInTheDocument();
});
