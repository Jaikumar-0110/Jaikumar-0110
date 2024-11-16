///<reference types="cypress"/>
describe('Test Suite',function () {
    //Hooks:
    before(()=> {
        cy.fixture('example').then((info)=>{
            this.info=info
        })
         
    })
    it('Test Case Profile',()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.viewport(1300,700)
        cy.get('[name="name"]:nth-child(2)').type(this.info.name)
        cy.get('[name="email"]').type(this.info.email)
        cy.get('#exampleInputPassword1').type(this.info.password)
        cy.get('#exampleCheck1').check().should('be.checked')
        cy.get('select').select(this.info.gender)
        cy.get('#inlineRadio2').check().should('be.checked').and('have.value','option2')
        //cy.get('[name="bday"]').click(this.info.Dob)
    })
    it('Test Case-Product',()=>{
       cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
       cy.products('Samsung Note 8')
    })
    })
    
