const { fishMenu } = require("./restaurant.js")
const { mongerInventory } = require("./fishMonger.js")

const testFunction = mongerInventory(5);

const dailyPriceLimit = 3.99
const menu = fishMenu(dailyPriceLimit)
console.log(menu)

