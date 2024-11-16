///<reference types="cypress" />

describe('my first test',function() {
    it('my first testcase',function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.viewport(1300,700)

        var date='15';
        const month='6'
        var year='2025';
        const exp=[month,date,year]

        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains('button',year).click()
        cy.get('.react-calendar__year-view__months__month').eq(Number(month)-1).click()
        cy.contains('abbr',date).click()
        
        //Assertion:
        cy.get('.react-date-picker__inputGroup__input').each((e1,index,$list)=>{
        cy.wrap(e1).invoke('val').should('eq',exp[index])
        })
})

})
