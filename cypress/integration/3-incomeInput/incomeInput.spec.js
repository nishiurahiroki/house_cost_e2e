/// <reference types="cypress" />
describe('収入入力画面', () => {
  before(() => {
    cy.visit('http://localhost:3000')
    cy.get('#mail-address').type('nishiurahiroki@gmail.com')
    cy.get('#password').type('P@ssword1234')
    cy.get('button').contains('ログイン').click()
    cy.get('button[aria-label=Menu]').click()
    cy.get('span').contains('収入入力').click()
  })

  it('正常に登録出来るか確認するテスト', () => {
    const inputIncome = 20000

    cy.get('#costAmount').type(inputIncome)
    cy.get('button').contains('登録').click()
    cy.get('#successMessage').should('have.text', '登録しました')
  })

  it('収入内容プルダウンの内容が画面に表示されている事を確認するテスト', () => {
    cy.get('#costTypes[value=1]').should('be.hidden')
  })
})