import { defaultRegex, formatSelectors } from "../../src/lib"

const expectedResult = "body > .modal [data-cy=\"my-custom-selector\"] > .some-class [data-cy=\"my-custom-selector-child\"] [data-cy=\"my-custom-selector-grand-child\"]"

test('should format the cy shorts selectors to proper data-cy selectors', () => {
  const selectors = "body > .modal -cy:my-custom-selector > .some-class -cy:my-custom-selector-child -cy:my-custom-selector-grand-child"
  expect(formatSelectors(selectors, defaultRegex)).toBe(expectedResult);
})