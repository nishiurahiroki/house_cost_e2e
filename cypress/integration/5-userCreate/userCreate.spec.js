/// <reference types="cypress" />

describe('ユーザー登録画面', () => {
  before(() => {
    cy.visit('http://localhost:3000')
    cy.get('button').contains('ユーザー新規登録').click()
  })

  it('ユーザーが新規登録出来る事を確認するテスト', () => {
    cy.get('#mailAddress').type('example.com@hoge.com')
    cy.get('#password').type('password')
    cy.get('button').contains('追加').click()
    
    cy.get('#successMessage').should('have.text', 'ユーザー新規登録に成功しました')
  })
})