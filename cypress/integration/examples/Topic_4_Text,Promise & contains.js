///<reference types ="cypress"/>
describe('my first test suite',function(){
    it('my first test case',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.viewport(1300,700)
        cy.get('.search-keyword').type('ap')
        cy.wait(2000)
        cy.get('.product').should('have.length',4)
        cy.get('.product:visible').should('have.length',3)
        cy.get('.products').find('.product').should('have.length',3)
        cy.get('.products').find('.product').each((e1,index,$list)=>{
          var fruit= e1.find('h4.product-name').text()
          if(fruit.includes('App'))
            {
                cy.wrap(e1.find('button')).click()  
          }
        })
        cy.get('[src="https://rahulshettyacademy.com/seleniumPractise/images/bag.png"]').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get('.promoCode').type('20%')
        cy.contains('Apply').click()
        cy.contains('Place Order').click()
        cy.get('select').select('India').should('have.value','India')
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.contains('Proceed').click()
    })
})