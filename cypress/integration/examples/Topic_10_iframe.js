///<reference types="cypress-iframe"/>
import 'cypress-iframe'
describe('Test Suite',function () {
    it('Test Case',function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('[href="consulting"]').eq(0).click()
        cy.wait(6000)
        cy.iframe().find('#requirements').type('i want to join').should('be.visible','requirements')
        
    })
    
})