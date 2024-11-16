///<reference types="cypress"/>
describe('WebTable-1',function () {
    it('Course_Table-Next Element',function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.table-display tr td:nth-child(2)').each((e1,index,$list)=>{
       var element=e1.text()
       if(element.includes('Appium')){
        cy.get('.table-display tr td:nth-child(2)').eq(index).next().then((price)=>{
        var pricelist=price.text()
        expect(pricelist).to.equal('30')
        })
        }
    }) 
    })
    it('Position_Table-Previous Element',function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.tableFixHead #product tr td:nth-child(3)').each((e2,index,$list)=>{
            var text = e2.text()
            if(text.includes('Pune')){
                cy.get('.tableFixHead #product tr td:nth-child(3)').eq(index).prev().then((loca)=>{
                    var postion=loca.text()
                    expect(postion).to.equal('Engineer')

                })
                  
            }
        })

    })  
})