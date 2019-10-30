import { defaultRegex, formatSelectors } from "./lib"

export default function({ regex = defaultRegex } = {}) {
  const get = (originalFn, selectors) =>
    originalFn(formatSelectors(selectors, regex))

  const find = (originalFn, subject, selectors) =>
    originalFn(subject, formatSelectors(selectors, regex))

  Cypress.Commands.overwrite('get', get)
  Cypress.Commands.overwrite('find', find)
}
