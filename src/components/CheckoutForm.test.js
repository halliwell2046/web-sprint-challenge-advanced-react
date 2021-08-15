import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.getByText("Checkout Form");
  expect(header).toBeInTheDocument;
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  //Arrange
  const firstNameValue = screen.getByLabelText("First Name:");
  const lastNameValue = screen.getByLabelText("Last Name:");
  const addressValue = screen.getByLabelText("Address:");
  const cityValue = screen.getByLabelText("City:");
  const stateValue = screen.getByLabelText("State:");
  const zipValue = screen.getByLabelText("Zip:");
  const checkoutButton = document.querySelector("button");

  //Act
  userEvent.type(firstNameValue, "Gregory");
  userEvent.type(lastNameValue, "Kemp");
  userEvent.type(addressValue, "926 Ketcham St.");
  userEvent.type(cityValue, "Indianapolis");
  userEvent.type(stateValue, "Indiana");
  userEvent.type(zipValue, "46222");
  userEvent.click(checkoutButton);

  //Assert
  const confirmation = screen.getByTestId("successMessage");
  expect(confirmation).toBeInTheDocument();
});
