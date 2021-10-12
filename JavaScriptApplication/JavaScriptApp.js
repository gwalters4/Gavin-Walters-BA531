const { get } = require('http');
const recipe = require('./recipemodule.js');
const ingredient = require('./recipemodule.js');
const recipeEndPoint = '/api/recipes';
const ingredientsEndpoint = '/api/ingredients';

function getRecipes() {      //new function getRecipes
    return new Promise(function (resolve, rejects) {
        recipe.getData(recipeEndPoint)          //calls getData and passes the recipeEndpoint
            .then(function (response) {               //after results are returned passes to response
                response.forEach(item => {          //itterates through each item adding it to recipe
                    console.log(item.name);
                    console.log(item.ingredients);
                });
            })
    }).catch(function (error) {               //catches error
        console.log(error);                 //prints error
    });
};







getRecipes();
//recipe.getData(recipeEndPoint)
recipe.calcMaxPPG();
