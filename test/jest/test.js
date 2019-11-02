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

test('should allow developers to specify their own config for multiple attributes', () => {
  const selectors =
    'body > .modal test|my-test-value display|table-row > e2e|my-custom-selector > .some-class e2e|my-custom-selector-child e2e|my-custom-selector-grand-child'
  const expectedResult =
    'body > .modal [data-test="my-test-value"] [data-display="table-row"] > [data-e2e="my-custom-selector"] > .some-class [data-e2e="my-custom-selector-child"] [data-e2e="my-custom-selector-grand-child"]'
  expect(
    formatSelectors(selectors, {
      multiple: [
        {
          name: 'e2e',
        },
        {
          name: "display"
        },
        {
          name: "test"
        }
      ]
    }),
  ).toBe(expectedResult)
})
