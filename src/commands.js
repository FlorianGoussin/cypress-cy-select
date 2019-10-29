import { formatSelectors } from "./lib"

Cypress.Commands.overwrite('get', (originalFn, selectors) => {
  originalFn(Cypress.$(formatSelectors(selectors)))
})

Cypress.Commands.overwrite('find', { prevSubject: "element" }, (originalFn, subject, selectors) => {
  cy.wrap(subject.find(formatSelectors(selectors)))
})

