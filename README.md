# cypress-cy-select
Allows cypress get and find to use cy shorthand notation within get and find functions

## Install

```
npm i --save-dev cypress-cy-select
```

## Usage

In support/commands.js or support/index.js:

```
import setup from 'cypress-cy-select';
setup();
```

Use cy.get as you would normally use it, but you can now select data-cy with a shorthand notation: cy|mySelector


This:
```
cy.get("cy|mySelector .myClass1 > .myClass2 tagName")
```

will be actually formatted to:
```
cy.get('[data-cy="mySelector"] .myClass1 > .myClass2 tagName')
```


Alternatively, if you don't want the defaults, you can pass a configuration object:

```
const config = {
  name: 'e2e',
  separator: ':'
}
setup(config);
```

This:
```
cy.get("e2e:mySelector .myClass1 > .myClass2 tagName")
```

will be actually formatted to:
```
cy.get('[data-e2e="mySelector"] .myClass1 > .myClass2 tagName')
```


