///<reference types="cypress"/>
describe('Hide & Show Button, Alerts',function () {
it('Test Case',function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //Handling Simple Alert: 
    cy.get('#alertbtn').click()
    cy.on('window:alert',(j)=>{
        //Mocha:
        expect(j).to.equal('Hello , share this practice page and share your knowledge')
    })
    //Handling Confirm Alert:
    cy.contains('Alert').click()
    cy.on('window:confirm',(k)=>{
        expect(k).to.equal('Hello , Are you sure you want to confirm?')
    })
    //Show Button:
    cy.get('[value="Show"]').click()
    cy.get('#displayed-text').type('jai').should('be.visible')
   
    //Hide 
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')

})
   
})