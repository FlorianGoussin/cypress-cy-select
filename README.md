# cypress-cy-select
Allows cypress get and find to use cy shorthand notation within get and find functions

## Install

```
npm i --save-dev cypress-cy-select
```

In commands.js:

```
import setup from 'cypress-cy-select';
setup();
```

## Usage

Use cy.get as you would normally use it, but you can now select data-cy with a shorthand notation: cy|mySelector

## Example

If you use the get command this way:
```
cy.get("cy|mySelector .myClass1 > .myClass2 tagName")
```

Cypress will actually call:
```
cy.get('[data-cy="mySelector"] .myClass1 > .myClass2 tagName')
```
