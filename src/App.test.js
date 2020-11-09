import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";
import { act } from "react-dom/test-utils";

test("renders App without crashing", () => {
  render(<ContactForm />);
});

test("All form fields working", async () => {
  render(<ContactForm />);

  const firstName = screen.getByTestId(/firstName/i);
  fireEvent.change(firstName, { target: { value: "Test" } });
  expect(firstName).toHaveValue("Test");

  const lastName = screen.getByTestId(/lastName/i);
  fireEvent.change(lastName, { target: { value: "Test" } });
  expect(lastName).toHaveValue("Test");

  const email = screen.getByTestId(/email/i);
  fireEvent.change(email, { target: { value: "Test" } });
  expect(email).toHaveValue("Test");

  const message = screen.getByTestId(/message/i);
  fireEvent.change(message, { target: { value: "Test" } });
  expect(message).toHaveValue("Test");

  const button = screen.getByTestId(/button/i);
  act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
});
