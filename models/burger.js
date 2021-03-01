var orm = require("../config/orm");

var favouriteBurgers = [];
var devouredBurgers = [];

function addFavouriteBurger(burgerName) {
    console.log(`Favorite burger added named "${burgerName}"`);
}

function getFavouriteBurgers() {
    console.log("Getting Favourite Burgers ");
}

function devourFavouriteBurger(burgerName) {
    console.log(`Devoured Favourite "${burgerName}"`);
}

module.exports = {
    addFavouriteBurger,
    getFavouriteBurgers,
    devourFavouriteBurger,
    favouriteBurgers,
    devouredBurgers
}