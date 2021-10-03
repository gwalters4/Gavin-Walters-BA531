const host = "ba531-javascriptapp-appserver.azurewebsites.net";
const https = require('https');
const path = require('path');
const recipeEndPoint = '/api/recipes';
const ingredientsEndpoint = '/api/ingredients';

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

function calcMaxPPG(recipeName, recipeEndPoint, ingredientsEndpoint){ //doesnt need 2 promises
    return new Promise(function(resolve, rejects){
        getData(ingredientsEndpoint)
        
    })
}


module.exports = {
    getData,
    recipe,
    ingredient,
    calcMaxPPG,
}