import { formatSelectors } from '../../src/lib'

test('should format the cy shorts selectors to proper data-cy selectors', () => {
  const selectors =
    'body > .modal cy|my-custom-selector > .some-class cy|my-custom-selector-child cy|my-custom-selector-grand-child'
  const expectedResult =
    'body > .modal [data-cy="my-custom-selector"] > .some-class [data-cy="my-custom-selector-child"] [data-cy="my-custom-selector-grand-child"]'
  expect(formatSelectors(selectors)).toBe(expectedResult)
})

test('should allow developers to specify their own config', () => {
  const selectors =
    'body > .modal e2e:my-custom-selector > .some-class e2e:my-custom-selector-child e2e:my-custom-selector-grand-child'
  const expectedResult =
    'body > .modal [data-e2e="my-custom-selector"] > .some-class [data-e2e="my-custom-selector-child"] [data-e2e="my-custom-selector-grand-child"]'
  expect(formatSelectors(selectors, { name: 'e2e', separator: ':' })).toBe(
    expectedResult,
  )
})

test('should allow developer to use spaces', () => {
  const selector = "body > foo:'My long name with spaces'";
  const expectedResult = 'body > [data-foo="My long name with spaces"]';

  expect(formatSelectors(selector, { name: 'foo', separator: ':' })).toBe(expectedResult)
})


test('should allow developer to use any name', () => {
  const selector = "cy|child";
  const expectedResult = '[data-cy="child"]';

  expect(formatSelectors(selector)).toBe(expectedResult)
})
