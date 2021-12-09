
module.exports = {
    elements: {
      InstructionTag: {
        selector: '//*[@id="app"]/div/div[2]/div[2]/label',
        locateStrategy: 'xpath',
      },
      Deletebttn: {
          selector: '//*[@id="app"]/div/div[1]/button/span',
          locateStrategy:'xpath'
      },
      Selectbttn: {
          selector: '//*[@id="app"]/div/div[1]/div/div[2]/table/tbody/tr[1]/td[1]/label/span[1]',
          locateStrategy: 'xpath'
      },
      SetName:{
          selector: '//*[@id="__BVID__26"]',
          locateStrategy: 'xpath'
      },
      setInstruction:{
          selector:'//*[@id="textarea"]',
          locateStrategy: 'xpath'
      },
      setDate:{
          selector:'//*[@id="app"]/div/div[2]/div[3]/div/div/div[1]/div/input',
          locateStrategy:'xpath'
      },
      submitbttn:{
          selector:'//*[@id="app"]/div/div[2]/button/span',
          locateStrategy: 'xpath'
      }

    },
    commands: [{
        checkintructiontag(){
            this.assert.containsText('@InstructionTag', 'Instruction:');
            return this;
        },
        clickingbttn(){
            this.waitForElementVisible('@Selectbttn')
                .click('@Selectbttn')
                // .waitForElementVisible('@Deletebttn');
               // .click('@Deletebttn');
            return this;
        },
        submitbttn(){
            this.waitForElementVisible('@SetName')
                .setValue('@SetName', 'joseph')
                .waitForElementVisible('@setInstruction')
                .setValue('@setInstruction', 'some instruction')
                .waitForElementVisible('@setDate')
                .click('@setDate')
                .setValue('@setDate', '12/8/2021, 12:00 AM')
                .waitForElementVisible('@submitbttn')
                .pause(100)
                .click('@setDate');
            return this;
        }
    }]
};