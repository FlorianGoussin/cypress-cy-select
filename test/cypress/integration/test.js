import commands from '../../../src/commands.js'

describe('Test cypress overwritten commands', () => {
  before(() => {
    commands()
  })

  beforeEach(() => {
    cy.visit('./index.html')
  })

  it('should get the element', () => {
    cy.get('body > .modal')
    cy.get('body > .modal cy|my-custom-selector')
    cy.get('body > .modal cy|my-custom-selector > .some-class')
    cy.get(
      'body > .modal cy|my-custom-selector > .some-class cy|my-custom-selector-child cy|my-custom-selector-grand-child',
    ).should('exist')
  })

  it('should get and find element', () => {
    cy.get('body > .modal')
      .find('cy|my-custom-selector > .some-class')
      .find('cy|my-custom-selector-child cy|my-custom-selector-grand-child')
    cy.get('body > .modal')
      .find('cy|my-custom-selector > .some-class')
      .find('cy|my-custom-selector-child')
      .find('cy|my-custom-selector-grand-child')
      .should('exist')
  })

  it('should let the user specify its own configuration', () => {
    commands({ name: 'cy', separator: ':' })
    cy.get('body > .modal cy:my-custom-selector').should('exist')
    commands({ name: 'cy', separator: '-' })
    cy.get('body > .modal cy-my-custom-selector').should('exist')
    commands({ name: 'cy', separator: '_' })
    cy.get('body > .modal cy_my-custom-selector').should('exist')
  })
})
