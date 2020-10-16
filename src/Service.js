const fetch = require('node-fetch');

const fetchDrinks = () => {
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then( res => res.json())
    .then( json => 
      json.drinks.filter( ( drink , idx ) => idx < 20)
    );
}

module.exports = {
  fetchDrinks
};