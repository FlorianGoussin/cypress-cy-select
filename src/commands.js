import { formatSelectors } from "./lib"

Cypress.Commands.overwrite('get', selectors => {
  cy.wrap(cy.$(formatSelectors(selectors)))
})

Cypress.Commands.overwrite('find', selectors => {
  cy.wrap(cy.$(formatSelectors(selectors)))
})