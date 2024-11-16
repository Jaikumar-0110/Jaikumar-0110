///<reference types = "cypress"/>
describe('my test suite',function() {
    it('Testcase',function () {
        cy.visit('https://www.flipkart.com/');
        cy.viewport(1300,700)
        //cy.get(':nth-child(2) > ._38VF5e > ._3jeYYh > ._1Us3XD > .H6-NpN').click()
       // cy.get('.r4vIwl').type('9003022885')
        cy.get('[alt*="Mobiles"]').click()
        cy.contains('iPhone 15').click()
        cy.get('.Lni97G > .tJjCVx > .XqNaEv').check()
       // cy.contains('Add to cart').click()
       // cy.contains('Cart').click()
        
    })
    
})