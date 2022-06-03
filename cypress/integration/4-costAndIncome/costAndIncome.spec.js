/// <reference types="cypress" />

describe('入出費一覧', () => {
  before(() => {
    cy.visit('http://localhost:3000')
    cy.get('#mail-address').type('nishiurahiroki@gmail.com')
    cy.get('#password').type('P@ssword1234')
    cy.get('button').contains('ログイン').click()
    cy.get('button[aria-label=Menu]').click()
    cy.get('span').contains('入出費一覧').click()
  })

  it('登録されているデータが表示されているか確認するテスト', () => {
    cy.get('li').should('be.visible')
  })

  it('削除ボタンが正常に動作するか確認するテスト', () => {
    cy.get('[name=deleteButton]').eq(0).click()
    cy.get('#successMessage').should('have.text','削除に成功しました')
  })
})