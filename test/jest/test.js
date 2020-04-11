import { formatSelectors } from '../../src/lib'

test.each([
  ['p', 'p'],
  ['div', 'div'],
  ['h1,div,p', 'h1,div,p'],
  ['p:first', 'p:first'],
  ['cy|my-custom-selector#my-id', '[data-cy="my-custom-selector"]#my-id'],
  ['cy|my-custom-selector.my-class', '[data-cy="my-custom-selector"].my-class'],
  ['cy|my-custom-selector:nth-of-type(2),h1,p', '[data-cy="my-custom-selector"]:nth-of-type(2),h1,p'],
  [
    'cy|my-custom-selector-1.my-class,cy|my-custom-selector-2#my-id', 
    '[data-cy="my-custom-selector-1"].my-class,[data-cy="my-custom-selector-2"]#my-id'
  ],
  ['cy|my-custom-selector', '[data-cy="my-custom-selector"]'],
  ['cy|my-custom-selector:first', '[data-cy="my-custom-selector"]:first'],
  ['cy|my-custom-selector + p', '[data-cy="my-custom-selector"] + p'],
  ['cy|my-custom-selector:disabled', '[data-cy="my-custom-selector"]:disabled'],
  ['cy|my-custom-selector[title|="Tomorrow"]', '[data-cy="my-custom-selector"][title|="Tomorrow"]'],
  [
    'cy|my-custom-selector:disabled > p:disabled',
    '[data-cy="my-custom-selector"]:disabled > p:disabled',
  ],
  [
    'cy|my-custom-selector:disabled:not(:last-child) > p:disabled:not(:first-child)',
    '[data-cy="my-custom-selector"]:disabled:not(:last-child) > p:disabled:not(:first-child)',
  ],
  [
    'cy|my-custom-selector:first-child > p:last-child',
    '[data-cy="my-custom-selector"]:first-child > p:last-child',
  ],
  [
    'body > .modal cy|my-custom-selector > .some-class cy|my-custom-selector-child cy|my-custom-selector-grand-child',
    'body > .modal [data-cy="my-custom-selector"] > .some-class [data-cy="my-custom-selector-child"] [data-cy="my-custom-selector-grand-child"]',
  ],
  ['other-cy|my-custom-selector', 'other-cy|my-custom-selector'],
])(
  'should format the cy selector `%s` to proper data-cy selectors `%s`',
  (selectors, expectedResult) => {
    expect(formatSelectors(selectors)).toBe(expectedResult)
  },
)

test.each([
  [
    'body > .modal e2e:my-custom-selector > .some-class e2e:my-custom-selector-child e2e:my-custom-selector-grand-child',
    'body > .modal [data-e2e="my-custom-selector"] > .some-class [data-e2e="my-custom-selector-child"] [data-e2e="my-custom-selector-grand-child"]',
  ],
  [
    'e2e:my-custom-selector:disabled:not(:last-child) > e2e:my-custom-selector-2:disabled:not(:first-child)',
    '[data-e2e="my-custom-selector"]:disabled:not(:last-child) > [data-e2e="my-custom-selector-2"]:disabled:not(:first-child)',
  ],
  ['e2e:my-custom-selector', '[data-e2e="my-custom-selector"]'],
])(
  'should format the cy selector `%s` to proper data-e2e selectors `%s` for a custom config',
  (selectors, expectedResult) => {
    expect(formatSelectors(selectors, { name: 'e2e', separator: ':' })).toBe(expectedResult)
  },
)
