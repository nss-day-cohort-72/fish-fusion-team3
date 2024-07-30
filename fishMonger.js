const { boatInventory } = require("./fishingBoat.js")


const mongerInventory = (maxPricePerFish) => {
const freshCatch = boatInventory();
const filteredFish = freshCatch.filter(
fish => fish.price <= 7.50 && fish.amount >= 10 && fish.price <= maxPricePerFish
);

const fishBought = filteredFish.map(
    fish => {
        return {
            id: fish.id,
            species: fish.species,
            weight: fish.weight,
            price: fish.price,
            amount: 10
        };
    });



const chefSelection = fishBought.map(fish => {
    return {
        id: fish.id,
        species: fish.species,
        weight: fish.weight,
        price: fish.price,
        amount: Math.ceil(fish.amount/2)

    };
});
return chefSelection;s
};

module.exports = { mongerInventory };

// Step 2b: Apply fishmonger's purchasing constraints
    // const fishMongerSelection = freshCatch
    //     .filter(fish => fish.price <= 7.50 && fish.amount >= 10)
    //     .map(fish => {
    //         return { ...fish, amount: 10 }; // Buy exactly 10 of each fish
    //     });
    // spread operator: When you use it in combination with map(), it allows 
    //you to copy all properties of an object and then modify or add specific properties in the copied object.
    //Apply chef's budget constraint BECAUSE THE MAX PRICE THE FISHER COULD AFFORD MIGHT BE LESS THAN 7.50 THEY PASS IN AS VARIABLE