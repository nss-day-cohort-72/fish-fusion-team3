const { mongerInventory } = require("./fishMonger.js")

const fishMenu = (dailyLimit) => {

const chefSelection = mongerInventory(dailyLimit); 




let menu = '<h1>Menu</h1><article class="menu">\n';
for (const fish of chefSelection){
menu += `<h2>${fish.species}</h2>`;
menu += `<section class="menu__item"> ${fish.species} soup </section>`;
menu += `<section class="menu__item"> ${fish.species} sandwich </section>`;
menu += `<section class="menu__item"> grilled ${fish.species} </section>`;
}
menu += `</article>`;    
return menu    
};
module.exports = {fishMenu};




/* <h1>Menu</h1>
<article class="menu">
    <h2>Tuna</h2>
    <section class="menu__item">Tuna Soup</section>
    <section class="menu__item">Tuna Sandwich</section>
    <section class="menu__item">Grilled Tuna</section>
</article>


// what does fish menu do
//   creates an htm menu based on the max price and based on the inventory and price will allow different types of meals allowing up to 3 different types