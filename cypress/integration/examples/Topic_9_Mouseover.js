///<reference types="cypress"/>
describe('MouseFunction',function () {
    it('Action-1',function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       //Mouse Action using invoke Show:
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
       cy.url().should('include','top')
      
    })
    it('Action-2',function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
         //Mouse Action using ForceClick:
         cy.contains('Reload').click({force:true})
         cy.url().should('not.include','reload')
    })
    
})