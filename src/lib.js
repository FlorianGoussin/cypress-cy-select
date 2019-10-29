export const formatSelectors = (selectors, regExp = /(^-.+\:)/) => {
  selectors
  .split(" ")
  .forEach((selector) => {
    let match = selector.match(regExp)
    if (match) {
      match = match.pop()
      const attr = "data" + match.slice(0, -1)
      const value = selector.replace(match, "")
      selectors = selectors.replace(`${match}${value}`, `[${attr}=\"${value}\"]`)
    }
  })
  return selectors
}