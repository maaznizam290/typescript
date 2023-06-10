/// <reference types="cypress" />

describe("Add Product to Wishlist and Cart", () => {
  beforeEach(() => {
    // Navigating to the product page before each test case
    cy.visit("https://demowebshop.tricentis.com/");
    cy.contains("$25 Virtual Gift Card").click();
  });

  it("should add the product to the wishlist", () => {
    cy.get("#giftcard_2_RecipientName").type("Recipient Name");
    cy.get("#giftcard_2_RecipientEmail").type("recipient@example.com");
    cy.get("#giftcard_2_SenderName").type("Your Name");
    cy.get("#giftcard_2_Message").type("Test message");
    cy.get("#giftcard_2_SenderEmail").type("sender@example.com"); // Additional field
    cy.get("#add-to-wishlist-button-2").click();
    cy.get(".ico-wishlist > .cart-label").click();
    cy.visit("https://demowebshop.tricentis.com/wishlist");
  });

  it("should display an error if adding the product to the wishlist fails", () => {
    cy.get("#giftcard_2_RecipientName").type("Recipient Name");
    cy.get("#giftcard_2_RecipientEmail").type("recipient@example.com");
    cy.get("#giftcard_2_SenderName").type("Your Name");
    cy.get("#giftcard_2_Message").type("Test message");
    cy.get("#giftcard_2_SenderEmail").type("sender@example.com"); // Additional field
    // Manipulate the network request to simulate a failure
    cy.intercept("POST", "/wishlist").as("wishlist");
    cy.get("#add-to-wishlist-button-2").click();
    /// cy.wait("@wishlist");
    cy.contains("div.validation-summary-errors").should(
      "contain.text",
      "Adding to wishlist failed!"
    );
  });

  it("should add the product to the cart", () => {
    cy.get("#giftcard_2_RecipientName").type("Recipient Name");
    cy.get("#giftcard_2_RecipientEmail").type("recipient@example.com");
    cy.get("#giftcard_2_SenderName").type("Your Name");
    cy.get("#giftcard_2_Message").type("Test message");
    cy.get("#giftcard_2_SenderEmail").type("sender@example.com"); // Additional field
    cy.get("#giftcard_2_Message").click();
  });

  it("should display an error if adding the product to the cart fails", () => {
    cy.visit("https://demowebshop.tricentis.com/25-virtual-gift-card");
    cy.get("#giftcard_2_RecipientName").type("testing  user");
    cy.get("#giftcard_2_RecipientEmail").type("testing32@test.com");
    cy.get("#giftcard_2_SenderName").type("Your Name");
    cy.get("#giftcard_2_SenderEmail").type("tester00@yopmail.com");
    cy.get("#giftcard_2_Message").type("Test message");
  });
  it("should throw the validation error if the fields are empty", () => {
    cy.get("#giftcard_2_RecipientName").clear();
    cy.get("#giftcard_2_RecipientEmail").clear();
    cy.get("#giftcard_2_SenderName").clear();
    cy.get("#giftcard_2_SenderEmail").clear();
    cy.get("#giftcard_2_Message").clear();
    cy.get("#add-to-wishlist-button-2").click();
  });
});
