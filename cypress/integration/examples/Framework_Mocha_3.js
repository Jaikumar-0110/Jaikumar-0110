import Homepage from "../PageObjectModel/Homepage";
describe('Test Suite',function () {
    //Hooks:
    before(()=> {
        cy.fixture('example').then((data)=>{
            this.data=data
        })
        it('Pom Homepage',()=>{
            cy.visit('https://rahulshettyacademy.com/angularpractice/')
            cy.viewport(1300,700)
            const homepage = new Homepage();
            homepage.getusername().should('have.value',this.data.name)
            homepage.getemail().should('have.value',this.data.email)
            homepage.getpassword().should('have.value',this.data.password)
            homepage.getcheckbox().check().should('be.checked')
            homepage.getgender().select(this.data.gender)
            homepage.getradiobutton().should('be.checked')
            homepage.getshoptab().click()

        })
    })
})