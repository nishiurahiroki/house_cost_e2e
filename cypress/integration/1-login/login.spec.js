/// <reference types="cypress" />

describe('ログイン画面', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('ログイン出来るかテスト', () => {
    cy.get('#mail-address').type('nishiurahiroki@gmail.com')
    cy.get('#password').type('********')
    cy.get('button').contains('ログイン').click()

    cy.get('h6').contains('出費入力')
  })
})