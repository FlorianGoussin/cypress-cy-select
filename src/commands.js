import { formatSelectors } from "./lib"

Cypress.Commands.overwrite('get', selectors => {
  cy.wrap(cy.$(formatSelectors(selectors)))
})

Cypress.Commands.overwrite('find', { prevSubject: "element" }, (subject, selectors) => {
  cy.wrap(subject.find(formatSelectors(selectors)))
})

