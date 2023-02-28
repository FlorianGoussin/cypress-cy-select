/**
 * format any matched attribute to its proper css selector notation
 * e.g. "-cy:my-selector-name" will be replaced by [data-cy="my-selector-name"]
 *
 * config example:
 * const config = {
 *    name: “”
 *    prefix: “”
 *    separator: “:”
 * }
 *
 * @param  {string}  selectors         the css selectors
 * @param  {object}  config            the options
 * @param  {string}  config.name       the attribute name - default is 'cy'
 * @param  {string}  config.prefix     the attribute prefix - default is 'data-'
 * @param  {string}  config.separator  the separator between the attribute and its value - default is '|'
 * @return {string}                    the formatted selectors
 */
export const formatSelectors = (
  selectors,
  { name = 'cy', prefix = 'data-', separator = '|' } = {},
) => {
  const shortNotation = name + separator
  const attr = prefix + name
  if (!selectors.includes(shortNotation)) {
    return selectors
  }
  selectors.split(' ').forEach(selector => {
    if (selector === '>') return
    if (selector.startsWith(name)) {
      const value = selector.replace(shortNotation, '')
      selectors = selectors.replace(
        `${shortNotation}${value}`,
        `[${attr}=\"${value}\"]`,
      )
    }
  })
  return selectors
}
