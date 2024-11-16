///<reference types="cypress" />
describe('my first test suite-4',function() {
    it('my first testcase',function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.viewport(1300,700);
        cy.get('.search-keyword').type('br');
        cy.wait(2000);
        cy.get('.product').should('have.length',3);
        cy.get('.product:visible').should('have.length',2);
        cy.get('.products').find('.product').should('have.length',2);
    // This two commands used to get values dynamically change:  
    //cy.get(':nth-child(1) > .product-action > button').click()
    //cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($e1,index, $list) =>{
                const veg=$e1.find('h4.product-name').text()
                if(veg.includes('Br'))
                {
                    cy.wrap($e1).find('button').click()
                }
        })
    })    
})