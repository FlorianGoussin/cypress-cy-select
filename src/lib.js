/**
 * format any matched attribute to its proper css selector notation
 * e.g. "-cy:my-selector-name" will be replaced by [data-cy="my-selector-name"]
 * @param  {string}  selectors         the css selectors
 * @param  {object}  config            the options
 * config example:
 * const config = {
 *    name: “”
 *    prefix: “”
 *    separator: “:” => this is the default separator
 *    multiple: [{
 *      name: “cy”,
 *      prefix: “data-“,
 *      separator: “|” => separator specific to cy
 *    },
 *    {
 *      name: “title”,
 *      prefix: “”,
 *      separator: “”
 *  }]
 * }
 * @param  {string}  config.attrName   the attribute name
 * @param  {string}  config.prefix     the attribute name
 * @param  {string}  config.separator  the separator between the attribute and its value
 * @param  {string}  config.multiple   array of specific config (WIP)
 * @return {string}                    the formatted selectors
 */
export const formatSelectors = (selectors, {
  attrName = "cy",
  prefix = "data-",
  separator = "|",
  multiple = [] } = {}
) => {
  selectors
  .split(" ")
  .forEach((selector) => {
    if (selector.startsWith(attrName)) {
      const attr = prefix + attrName
      const shortNotation = attrName + separator
      const value = selector.replace(shortNotation, "")
      selectors = selectors.replace(`${shortNotation}${value}`, `[${attr}=\"${value}\"]`)
    }
  })
  return selectors
}