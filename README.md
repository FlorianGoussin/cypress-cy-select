# cypress-cy-select
Allows cypress get and find to use cy shorthand notation

```
npm install --save-dev cypress-cy-select
```

In commands.js:

```
import setup from 'cypress-cy-select';
setup();
```

How to use it:
Like cy.get, but you can now select data-cy with a shorthand notation: cy|mySelector

e.g.
```
cy.get("cy|mySelector .myClass1 > .myClass2 tagName")
```
