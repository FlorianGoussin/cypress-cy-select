/**
 * format any matched attribute to its proper css selector notation
 * e.g. "-cy:my-selector-name" will be replaced by [data-cy="my-selector-name"]
 *
 * config example:
 * const config = {
 *    name: “” // default name
 *    prefix: “”
 *    separator: “:” => this is the default separator
 *    multiple: [{
 *      name: “cy”,
 *      prefix: “data-“,
 *    },
 *    {
 *      name: “title”,
 *      prefix: “”,
 *  }]
 * }
 *
 * @param  {string}  selectors         the css selectors
 * @param  {object}  config            the options
 * @param  {string}  config.name   the attribute name
 * @param  {string}  config.prefix     the attribute name
 * @param  {string}  config.separator  the separator between the attribute and its value
 * @param  {string}  config.multiple   array of specific name and prefix
 * @return {string}                    the formatted selectors
 */
export const formatSelectors = (
  selectors,
  { name = 'cy', prefix = 'data-', separator = '|', multiple = [] } = {},
) => {
  selectors.split(' ').forEach(selector => {
    if (selector === '>') return

    const attrConfig = multiple.find(attr => selector.startsWith(attr.name))
    const attrName = (attrConfig && attrConfig.name) || name
    const attrPrefix =
      attrConfig && attrConfig.prefix != null ? attrConfig.prefix : prefix

    if (selector.startsWith(attrName)) {
      const attr = attrPrefix + attrName
      const shortNotation = attrName + separator
      const value = selector.replace(shortNotation, '')
      selectors = selectors.replace(
        `${shortNotation}${value}`,
        `[${attr}=\"${value}\"]`,
      )
    }
  })
  return selectors
}
