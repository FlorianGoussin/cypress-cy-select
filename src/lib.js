/**
 * format any matched attribute to its proper css selector notation
 * e.g. "-cy:my-selector-name" will be replaced by [data-cy="my-selector-name"]
 * @param  {string}  selectors  the css selectors
 * @param  {string}  attrName   the attribute name
 * @param  {string}  separator  the separator between the attribute and its value
 * @return {string}             the formatted selectors
 */
export const formatSelectors = (selectors, attrName = "cy", separator = "|") => {
  selectors
  .split(" ")
  .forEach((selector) => {
    if (selector.startsWith(attrName)) {
      const attr = "data-" + attrName
      const shortNotation = attrName + separator
      const value = selector.replace(shortNotation, "")
      selectors = selectors.replace(`${shortNotation}${value}`, `[${attr}=\"${value}\"]`)
    }
  })
  return selectors
}