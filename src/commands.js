import { formatSelectors } from './lib'

export default function(...args) {
  function get(originalFn, selectors, options) {
    const innerFn = originalFn.apply(this, [formatSelectors(selectors, ...args), options])
    return (subject) => {
      return innerFn(subject)
    }
  }
  function find(originalFn, selectors, options) {
    const innerFn = originalFn.apply(this, [formatSelectors(selectors, ...args), options])
    return (subject) => {
      return innerFn(subject)
    }
  }
  Cypress.Commands.overwriteQuery('get', get)
  Cypress.Commands.overwriteQuery('find', find)
}
