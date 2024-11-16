describe('Test Suite',function () {
    it('Test Case1',function () {
        cy.visit('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=716869041967&hvpos=&hvnetw=g&hvrand=4778937091508410718&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061952&hvtargid=kwd-64107830&hydadcr=14452_2404648&gad_source=1')
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        cy.title().should('include','Amazon.in')
    })  
    
})