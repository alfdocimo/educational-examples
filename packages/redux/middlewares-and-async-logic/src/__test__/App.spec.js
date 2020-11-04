import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { rest } from "msw";
import { setupServer } from "msw/node";
import usersMockResponse from "./users.mock";

import App from "../App";

describe("App behaviour", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  const server = setupServer(
    rest.get(apiUrl, (req, res, ctx) => {
      return res(ctx.json(usersMockResponse));
    })
  );

  it("should not crash", () => {
    const app = render(<App />);
    expect(app).toBeTruthy();
  });

  it("should render have a Text title by default", () => {
    const { getByText } = render(<App />);
    expect(getByText("User Fetcher 🔎")).toBeTruthy();
  });

  it("should render not started message by default", () => {
    const { getByText } = render(<App />);
    expect(getByText("Search status: not started")).toBeTruthy();
  });

  describe("Fetching behaviour", () => {
    it("should have a btn to fetch", () => {
      const { getByTestId } = render(<App />);
      expect(getByTestId("fetch-users-btn")).toBeTruthy();
    });

    it("should change state to loading when clicking", () => {
      const { getByTestId, getByText } = render(<App />);
      userEvent.click(getByTestId("fetch-users-btn"));
      // This will dispatch to the reducers, updating the state but not resolving the call to the API
      expect(getByText(/loading... ⌛/)).toBeTruthy();
    });

    it("should should return users when clicking", async () => {
      const { getByTestId, getByText } = render(<App />);
      userEvent.click(getByTestId("fetch-users-btn"));

      await waitFor(() =>
        expect(getByText(/name: Leanne Graham/)).toBeInTheDocument()
      );

      expect(getByText(/successful ✅/)).toBeTruthy();
    });

    it("should show an error if call fails", async () => {
      server.use(
        rest.get(apiUrl, (req, res, ctx) => {
          return res(
            ctx.status(500),
            ctx.json({ message: "Internal Server Error" })
          );
        })
      );

      const { getByTestId, getByText, debug } = render(<App />);
      userEvent.click(getByTestId("fetch-users-btn"));
      const errorMessage = /error ❌/;

      await waitFor(() => expect(getByText(errorMessage)).toBeInTheDocument());
    });
  });
});
