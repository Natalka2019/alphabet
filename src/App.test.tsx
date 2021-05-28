import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test("renders employees link", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/Visit Employees page/i);
  expect(linkElement).toBeInTheDocument();
});
