const { Builder, By } = require('selenium-webdriver')

const url =
  'file:///Volumes/MyData/Sunbeam/2023/sept/dac-pune/sdm/day8/code/app3/login.html'

;(async function example() {
  // create a driver instance to load a required browser
  // open the browser
  const driver = await new Builder().forBrowser('firefox').build()
  try {
    await driver.sleep(2000)

    // go to a url
    await driver.get(url)
    await driver.sleep(2000)

    // find an element for entering email
    const inputEmail = await driver.findElement(By.id('email'))
    await inputEmail.sendKeys('test@test.com')
    await driver.sleep(2000)

    // find an element for entering password
    const inputPassword = await driver.findElement(By.id('password'))
    await inputPassword.sendKeys('test')
    await driver.sleep(2000)

    // find the button reference
    const buttonLogin = await driver.findElement(By.id('buttonLogin'))
    buttonLogin.click()
    await driver.sleep(2000)

    // get the reference of result element
    const resultElement = await driver.findElement(By.id('result'))
    const result = await resultElement.getText()
    console.log(`result = ${result}`)
  } finally {
    // close the browser
    await driver.quit()
  }
})()
