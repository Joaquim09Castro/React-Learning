const fetch = require('node-fetch');

const fetchDrinks = () => {
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then( res => res.json() )
    .then( json => json.drinks );
}

// const fetchDrinkSpecs = (drinkId) => {
//   return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
//     .then( res => res.json() )
//     .then( json => {

//     })
// }

module.exports = {
  fetchDrinks
};