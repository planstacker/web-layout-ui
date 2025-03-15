import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Ensure jest-dom matchers are available
import Layout from "../Layout";

test("renders Layout component without crashing", () => {
  render(
    <Layout>
      <p>This is a test</p>
    </Layout>
  );

  expect(screen.getByText("This is a test")).toBeInTheDocument();
});
