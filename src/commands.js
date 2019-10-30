import { formatSelectors } from "./lib"

export default function({ name, separator } = {}) {
  const get = (originalFn, selectors) =>
    originalFn(formatSelectors(selectors, name, separator))

  const find = (originalFn, subject, selectors) =>
    originalFn(subject, formatSelectors(selectors, name, separator))

  Cypress.Commands.overwrite('get', get)
  Cypress.Commands.overwrite('find', find)
}
