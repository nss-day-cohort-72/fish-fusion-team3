const { fishMenu } = require("./restaurant.js");
const { mongerInventory } = require("./fishMonger.js");
console.log(mongerInventory(5));

const testFunction = mongerInventory(5); 
console.log(testFunction);

const dailyPriceLimit = 3.55
const menu = fishMenu(dailyPriceLimit);
console.log(menu);

