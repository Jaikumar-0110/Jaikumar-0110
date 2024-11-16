///<reference types="cypress"/>
describe('WindowsHandling-Methods',function () {
    it('Method-1',function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.origin('https://www.qaclickacademy.com/',()=>{
        cy.get('#navbarSupportedContent [href="https://www.udemy.com/user/testing-minds/"]').click()
        })  
    })

    it('Method_2',function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then((elements)=>{

            var url = elements.prop('href')

        cy.visit(url)
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.get('#navbarSupportedContent [href*="udemy"]').click

            //Page Logo check using contain Assertion:
            cy.get('.mt-50 h2').should('contain','QAClick Academy')

        })
        }) 
    })   
})