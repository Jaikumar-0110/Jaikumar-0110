describe ('my first test suite',function () {
    it('my first test case-1',function () {
        cy.visit('https://x.com/?lang=en/')
    })
    it('my first test case-2',function () {
        cy.visit('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=716869041967&hvpos=&hvnetw=g&hvrand=15512967687535754119&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061952&hvtargid=kwd-64107830&hydadcr=14452_2404648&gad_source=1')
    })
    it('my first test case-3',function () {
        cy.visit('https://www.flipkart.com/')
    })
    it('my first test case-4',function () {
        cy.visit('https://adactinhotelapp.com/')
    })
    
})