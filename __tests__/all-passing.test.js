import React from "react";
import { render } from "react-testing-library";
import { IsReady } from "../components";
import 'jest-dom/extend-expect'

test("Passing no data shows No", async () => {
  const { getByTestId } = render(<IsReady />);
  expect(getByTestId("no")).toHaveTextContent("No");
});
