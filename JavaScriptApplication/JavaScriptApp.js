const recipe = require('./recipemodule.js');
const ingredient = require('./recipemodule');
const recipeEndPoint = '/api/recipes';
const ingredientsEndpoint = '/api/ingredients';

let recipes = [];     //recipes array
let ing = [];         //ingredients array
function getRecipes(){      //new function getRecipes
    return new Promise(function(resolve, rejects){
        recipe.getData(recipeEndPoint)          //calls getData and passes the recipeEndpoint
        .then(function(response){               //after results are returned passes to response
            response.forEach(item => {          //itterates through each item adding it to recipe
                item.ingredients.forEach(i => {
                    ing.push(i);
                });
                let r = new recipe.recipe(item.name, ing);
                recipes.push(r);
                console.log(item.name)
            });
            //console.log(recipes);
            //console.log(ing);
        }).catch(function(error){               //catches error
            console.log(error);                 //prints error
        });
    });
    
};

let ingredients = [];
function getIngredients(){
    return new Promise(function(resolve, rejects){
        ingredient.getData(ingredientsEndpoint)
        .then(function(response){
            response.forEach(item => {
                ingredients.push(ingredient.ingredient(item.name, item.maxPPG))
                console.log(item.name)
            });
        }).catch(function(error){
            console.log(error);
        });
    });
} 

getRecipes();                                   //calls getRecipes
//console.log(recipes);                           //Print recipes Array
getIngredients();                               //calls getIngredients