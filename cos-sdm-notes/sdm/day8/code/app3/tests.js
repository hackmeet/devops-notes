// import required functions or objects from selenium webdriver
const { Builder, By, Key, until } = require('selenium-webdriver')

;(async function example() {
  // create a driver instance to load a required browser
  // open the browser
  const driver = await new Builder().forBrowser('firefox').build()
  try {
    await driver.sleep(2000)

    // go to a url
    await driver.get('https://www.google.co.in')

    await driver.sleep(2000)

    // find an element whose name is 'q'
    const input = await driver.findElement(By.name('q'))

    // type iphone in the input and press enter
    await input.sendKeys('iphone', Key.RETURN)

    // sleep for 10 seconds
    await driver.sleep(10000)
  } finally {
    // close the browser
    await driver.quit()
  }
})()
