import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import instance from "../services/instance";
import App from "../App";
import TaskPage from "../page/TaskPage";
jest.mock("../services/instance", () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: {} })),
  };
});

afterEach(() => {
  jest.resetAllMocks();
});

test("fail login", () => {
  instance.get.mockResolvedValue({ data: {} });
  const { getByLabelText, getByText, getByPlaceholderText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const usernameInput = getByPlaceholderText("Username");
  const firstNameInput = getByPlaceholderText("First Name");
  const submitButton = getByText("Login");

  fireEvent.click(submitButton);
  expect(getByText("Username is required")).toBeInTheDocument();
  expect(getByText("First Name is required")).toBeInTheDocument();
});

test("succesful login", () => {
  instance.get.mockResolvedValue({ data: {} });
  const { getByLabelText, getByText, getByPlaceholderText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const usernameInput = getByPlaceholderText("Username");
  const firstNameInput = getByPlaceholderText("First Name");
  const submitButton = getByText("Login");

  fireEvent.change(usernameInput, { target: { value: "user-test" } });
  fireEvent.change(firstNameInput, { target: { value: "Kier" } });

  fireEvent.click(submitButton);
  expect(getByText("Loading...")).toBeInTheDocument();
});
