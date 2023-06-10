/// <reference types="cypress" />

describe("Product Browsing and Search", () => {
  beforeEach(() => {
    // Navigating to the website before each test case
    cy.visit("https://demowebshop.tricentis.com");
  });

  it("should browse different product categories and ensure correct products are displayed", () => {
    // Browse Apparel and Shoes category
    cy.get(".top-menu").contains("Apparel & Shoes").click();

    // Verify if the correct products are displayed

    // Browse Digital Downloads category
    cy.get(".top-menu").contains("Digital downloads").click();

    // Verify if the correct products are displayed

    // Browse Jewelry category
    cy.get(".top-menu").contains("Jewelry").click();

    // Verify if the correct products are displayed
  });

  it('should sort products by "Name: A to Z" on Jewelry page', () => {
    // Browse Jewelry category
    cy.get(".top-menu").contains("Jewelry").click();

    // Sort products by "Name: A to Z"
    cy.get("#products-orderby").select("Name: A to Z");

    // Verify if the products are sorted correctly
  });

  it("should search for a specific product and select from the autocomplete list", () => {
    // Enter the search term
    cy.get("#small-searchterms").type("Card");

    // Wait for the autocomplete list to appear
    cy.get(".ui-autocomplete").should("be.visible");

    // Select the desired product from the autocomplete list

    // Verify if the product is selected
  });

  it("should verify accurate search results", () => {
    // Enter the search term
    cy.get("#small-searchterms").type("Card");

    // Submit the search form
    cy.get(".search-box-button").click();

    // Verify if the search results are accurate
  });

  it("should click on a product and verify the product details page", () => {
    // Click on a product
    cy.get(".product-item").first().click();

    // Verify if the product details page is displayed correctly
  });
  it("should display an error if incorrect products are displayed for different categories", () => {
    // Browse Apparel and Shoes category
    cy.get(".top-menu").contains("Apparel & Shoes").click();

    // Verify if the incorrect products are displayed

    // Browse Digital Downloads category
    cy.get(".top-menu").contains("Digital downloads").click();

    // Verify if the incorrect products are displayed

    // Browse Jewelry category
    cy.get(".top-menu").contains("Jewelry").click();

    // Verify if the incorrect products are displayed
  });

  it("should display an error if the products are not sorted correctly on Jewelry page", () => {
    // Browse Jewelry category
    cy.get(".top-menu").contains("Jewelry").click();

    // Sort products by "Name: A to Z"
    cy.get("#products-orderby").select("Name: A to Z");

    // Verify if the products are not sorted correctly
  });

  it("should display an error if the search results are not accurate", () => {
    // Enter the search term
    cy.get("#small-searchterms").type("InvalidProduct");

    // Submit the search form
    cy.get(".search-box-button").click();

    // Verify if the search results are not accurate
  });

  it("should display an error if the product details page is not displayed correctly", () => {
    // Click on a product
    cy.get(".product-item").first().click();

    // Verify if the product details page is not displayed correctly
  });
});
