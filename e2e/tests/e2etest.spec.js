describe('e2e test for todolist app', function() {

    // test() and specify() is also available
  
    it('check tittle', function(browser) {
      const page = browser.page.todolistpageObject();
      browser
        .useXpath() 
        .url('http://localhost:8080');
      page
        .checkintructiontag()
        .submitbttn();
    });
  
  });