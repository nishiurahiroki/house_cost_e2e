/// <reference types="cypress" />
describe('収入入力画面', () => {
  before(() => {
    cy.visit('http://localhost:3000')
    cy.get('#mail-address').type('nishiurahiroki@gmail.com')
    cy.get('#password').type('P@ssword1234')
    cy.get('button').contains('ログイン').click()
  })

  it('正常に登録出来るか確認するテスト', () => {
    // const inputCost = 20000

    // cy.get('#costAmount').type(inputCost)
    // cy.get('button.MuiButtonBase-root-53.MuiButton-root-197.MuiButton-contained-208.MuiButton-containedPrimary-209.MuiButton-raised-211.MuiButton-raisedPrimary-212').click()
    // cy.get('#successMessage').should('have.text', '登録しました')
  })
})