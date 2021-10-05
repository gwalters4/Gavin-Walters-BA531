const recipe = require('./recipemodule.js');
const ingredient = require('./recipemodule');
const recipeEndPoint = '/api/recipes';
const ingredientsEndpoint = '/api/ingredients';

function getRecipes(){      //new function getRecipes
    return new Promise(function(resolve, rejects){
        recipe.getData(recipeEndPoint)          //calls getData and passes the recipeEndpoint
        .then(function(response){               //after results are returned passes to response
            response.forEach(item => {          //itterates through each item adding it to recipe
                console.log(item.name);
                console.log(item.ingredients);
            });
            })
        }).catch(function(error){               //catches error
            console.log(error);                 //prints error
        });
};


function getIngredients(){
    return new Promise(function(resolve, rejects){
        ingredient.getData(ingredientsEndpoint)
            .then(function(response){
                response.forEach(item => {
                });
            }).catch(function(error){
                console.log(error);
            });
    });
}; 


getRecipes();
getIngredients();
recipe.calcMaxPPG();
