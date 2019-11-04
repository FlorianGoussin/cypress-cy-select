[![Build Status](https://travis-ci.com/FlorianGoussin/cypress-cy-select.svg?branch=master)](https://travis-ci.com/FlorianGoussin/cypress-cy-select)

# cypress-cy-select

data-cy shorthand notation for cypress [`.get()`](https://on.cypress.io/get) and [`.find()`](https://on.cypress.io/find) commands.

## Install

```
npm i --save-dev cypress-cy-select
```

## Usage

In `support/commands.js` or `support/index.js`:

```js
import setup from 'cypress-cy-select';
setup();
```

Use `cy.get()` as you would normally use it, but you can now select `data-cy` with a shorthand notation: `cy|mySelector`

This:

```js
cy.get("cy|mySelector .myClass1 > .myClass2 tagName")
```

will be actually formatted to:

```js
cy.get('[data-cy="mySelector"] .myClass1 > .myClass2 tagName')
```

Alternatively, if you don't want the defaults, you can pass a configuration object:

```js
const config = {
  name: 'e2e',
  separator: ':'
}
setup(config);
```

This:

```js
cy.get("e2e:mySelector .myClass1 > .myClass2 tagName")
```

will be actually formatted to:

```js
cy.get('[data-e2e="mySelector"] .myClass1 > .myClass2 tagName')
```
