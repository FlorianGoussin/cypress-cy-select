import { formatSelectors } from './lib'

export default function(...args) {
  const get = (originalFn, selectors, options) =>
    originalFn(formatSelectors(selectors, ...args), options)

  const find = (originalFn, subject, selectors, options) =>
    originalFn(subject, formatSelectors(selectors, ...args), options)

  Cypress.Commands.overwrite('get', get)
  Cypress.Commands.overwrite('find', find)
}
