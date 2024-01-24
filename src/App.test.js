import { render } from "@testing-library/react";
import App from "./App";

test("app", () => {
  expect(render(<App />)).toMatchSnapshot();
});
