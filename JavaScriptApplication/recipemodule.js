const host = "ba531-javascriptapp-appserver.azurewebsites.net";
const https = require('https');
const path = require('path');
const recipeEndPoint = '/api/recipes';
const ingredientsEndpoint ='/api/ingredients';

function getData(endpoint){
    return new Promise(function(resolve, rejects){
        let options = {
            host: host,
            path: endpoint
            };
            https.get(options, (res) => {
                let responseString = '';
                res.on('data',(data)=>{
                    responseString += data;
                });
                res.on('end',()=>{
                    resolve(JSON.parse(responseString));
                });
            }).on('error',(err)=>{
                rejects(err);
            });    
    });
};

function recipe(name, ingredients){
    this.name = name;
    this.ingredients = ingredients;
}

function ingredient(name, maxPPG){
    this.name = name;
    this.maxPPG = maxPPG;
}




function calcMaxPPG(recipeName, recipeEndPoint, ingredientsEndpoint){ //calculates the maxPPG for Drifter
    return new Promise(function(resolve, rejects){
        getData(recipeEndPoint)
            .then(recipe => {
                getData(ingredientsEndpoint)
                .then(ingredient => {
                    let total = 0;
                    recipe.ingredients.forEach(item => {
                        ingredients.foreach(ingredient => {
                            if (item.name === ingredient.name){
                                total += item.quantity * ingredient.maxPPG;
                            }
                        })
                    console.log(total);
                    })
                })
            })
            .catch(error => {

        
    });


    })
}

module.exports = {
    getData,
    recipe,
    ingredient,
    calcMaxPPG
}