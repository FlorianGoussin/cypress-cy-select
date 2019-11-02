import { formatSelectors } from './lib'

export default function(...args) {
  const get = (originalFn, selectors) =>
    originalFn(formatSelectors(selectors, ...args))

  const find = (originalFn, subject, selectors) =>
    originalFn(subject, formatSelectors(selectors, ...args))

  Cypress.Commands.overwrite('get', get)
  Cypress.Commands.overwrite('find', find)
}
