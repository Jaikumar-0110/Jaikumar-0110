///<reference types="cypress"/>
describe('my fourth TestSuite:',function(){
    it('my TestCase 1:',function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.viewport(1300,700)
        //Handling RadioButton:
        cy.get('[value="radio3"]').check().should('be.checked').and('have.value','radio3')

        //Handling Dynamic Dropdown:
        cy.get('#autocomplete').type('aus')
        cy.get('.ui-menu-item div').each((e1,index,$list)=>{
            if(e1.text()==='Austria'){
               cy.wrap(e1).click()
            }
        })

        //Handling Static Dropdown:
        cy.get('select').select('option1').should('have.value','option1')

        //Handling CheckBox:
        cy.get('#checkBoxOption3').check().should('be.checked')
        cy.get('#checkBoxOption3').uncheck().should('not.be.checked')
    })
})