/// <reference types="cypress" />

describe("Registration Page", () => {
  beforeEach(() => {
    // Navigate to the website before each test case
    cy.visit("https://demowebshop.tricentis.com");
  });

  it("should navigate to the Register page successfully", () => {
    // Clicking on the  Register button
    cy.get(".ico-register").click();

    // Verify that if Register page is loaded successfully
    cy.url().should("include", "/register");
    cy.get("h1").should("contain", "Register");
  });

  it("should fill all fields with valid data and register successfully", () => {
    // Clicking on the  Register button
    cy.get(".ico-register").click();

    // Filling in the gender checkbox
    cy.get("#gender-male").check();

    // cy.get("#gender-female").check();

    // Fill in all the fields with valid data as following

    cy.get("#FirstName").type("irfan");
    cy.get("#LastName").type("ayaz");
    cy.get("#Email").type("irfanayaz23@gmail.com");
    cy.get("#Password").type("secretpassword");
    cy.get("#ConfirmPassword").type("secretpassword");

    // submit  the registration form

    cy.get("#register-button").click();

    // Verifying that if the registration is successful
  });

  it("should display an error when fields are left blank", () => {
    // Clicking on Register button
    cy.get(".ico-register").click();

    // Submitting the registration form without filling any fields
    cy.get("#register-button").click();

    // Verifying if the appropriate error messages are displayed for each field
    cy.get(".field-validation").should("have.length", 5);
  });

  it("should display an error when an invalid email is entered", () => {
    // Clicking on Register button
    cy.get(".ico-register").click();

    // Filling in the gender checkbox
    cy.get("#gender-male").check();

    // Filling in the email field with an invalid email
    cy.get("#Email").type("invalidemail");

    // Submitting the registration form
    cy.get("#register-button").click();

    // Verifying if an error message is displayed for the email field
    cy.get("#Email").should("contain", "Wrong email");
  });

  it("should display an error when passwords do not match", () => {
    // Clicking on Register button
    cy.get(".ico-register").click();

    // Filling in the gender checkbox
    cy.get("#gender-male").check();

    // Filling in the password and confirm password fields with different values
    cy.get("#Password").type("secretpassword");
    cy.get("#ConfirmPassword").type("differentpassword");

    // Submitting the registration form
    cy.get("#register-button").click();

    // Verifying if an error message is displayed for the confirm password field
    cy.get("#ConfirmPassword").should(
      "contain",
      "The password and confirmation password do not match."
    );
  });

  it("should register a new user and verify the newly created email in the navbar", () => {
    // Clicking on Register button
    cy.get(".ico-register").click();

    // Filling in the gender checkbox
    cy.get("#gender-male").check();

    // Filling in all the fields with valid data
    cy.get("#gender-male").check();

    // Filling in all the fields with valid data
    cy.get("#FirstName").type("irfan");
    cy.get("#LastName").type("ayaz");
    cy.get("#Email").type("irfanayaz23@gmail.com");
    cy.get("#Password").type("secretpassword");
    cy.get("#ConfirmPassword").type("secretpassword");

    // Submitting the registration form
    cy.get("#register-button").click();
  });
});
