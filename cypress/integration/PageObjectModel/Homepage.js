class Homepage{
    getusername(){
       return cy.get('[name="name"]:nth-child(2)')
    }
    getemail(){
        cy.get('[name="email"]')
    }
    getpassword(){
        return cy.get('#exampleInputPassword1')
    }
    getcheckbox(){
      return cy.get('#exampleCheck1')
    }
    getgender(){
       return cy.get('select')
    }
    getradiobutton(){
        return cy.get('#inlineRadio2')
    }
    gettwowaybindingname(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }
    getshoptab(){
        cy.get(':nth-child(2) > .nav-link')
    }
}
export default Homepage