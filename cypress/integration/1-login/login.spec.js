/// <reference types="cypress" />

describe('ログイン画面', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('ログイン出来るか確認するテスト', () => {
    cy.get('#mail-address').type('nishiura.t2yjam@gmail.com')
    cy.get('#password').type('cypress-test')
    cy.get('button').contains('ログイン').click()

    cy.get('h6').contains('出費入力')
  })

  it('ログイン画面が正しく表示されているか確認するテスト', () => {
    cy.get('#mail-address')
    cy.get('#password')
    cy.get('button').contains('ログイン')
  })

  it('ログイン失敗時にエラーメッセージが表示されるか確認するテスト', () => {
    cy.get('#mail-address').type('nishiurahiroki@gmail.com')
    cy.get('#password').type('********')
    cy.get('button').contains('ログイン').click()
    cy.get('#successMessage').contains('ログインに失敗しました')
  })
})