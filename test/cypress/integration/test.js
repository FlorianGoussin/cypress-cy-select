describe("Test cypress overwritten commands", () => {
  beforeEach(() => {
    cy.visit("./index.html")
  })

  it("should get the element", () => {
    cy.get("body > .modal")
    cy.get("body > .modal cy|my-custom-selector")
    cy.get("body > .modal cy|my-custom-selector > .some-class")
    cy.get("body > .modal cy|my-custom-selector > .some-class cy|my-custom-selector-child cy|my-custom-selector-grand-child").should("exist")
  })

  it("should get and find element", () => {
    cy.get("body > .modal")
      .find("cy|my-custom-selector > .some-class")
      .find("cy|my-custom-selector-child cy|my-custom-selector-grand-child")
    cy.get("body > .modal")
      .find("cy|my-custom-selector > .some-class")
      .find("cy|my-custom-selector-child")
      .find("cy|my-custom-selector-grand-child")
      .should("exist")
  })
})