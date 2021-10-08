const host = "ba531-javascriptapp-appserver.azurewebsites.net";
const https = require('https');
const path = require('path');
const { toASCII } = require('punycode');
const recipeEndPoint = '/api/recipes';
const ingredientsEndpoint = '/api/ingredients';

function getData(endpoint) {
    return new Promise(function (resolve, rejects) {
        let options = {
            host: host,
            path: endpoint
        };
        https.get(options, (res) => {
            let responseString = '';
            res.on('data', (data) => {
                responseString += data;
            });
            res.on('end', () => {
                resolve(JSON.parse(responseString));

            });
        }).on('error', (err) => {
            rejects(err);
        });
    });
};

function recipe(name, ingredients) {
    this.name = name;
    this.ingredients = new Array();

}

function ingredient(name, MaxPPG) {
    this.name = name;
    this.MaxPPG = MaxPPG;
}


function calcMaxPPG() { //calculates the maxPPG for Drifter
    return new Promise(function (resolve, rejects) {
        getData(recipeEndPoint)
            .then(result => {
                // console.log(ingredient);
                result.forEach(item => {
                    var Recipe1 = new recipe();
                    Recipe1.name = item.name;
                    Recipe1.ingredients = item.ingredients;
                    let total = 0;
                    // console.log(Recipe1.name)
                    getData(ingredientsEndpoint)
                        .then(result2 => {
                            result2.forEach(TEMP => {
                                var ingredient1 = new ingredient();
                                ingredient1.name = TEMP.name;
                                ingredient1.MaxPPG = TEMP.MaxPPG;
                                let quantity = Recipe1.ingredients.map(a => a.quantity);
                                let name = Recipe1.ingredients.map(b => b.name);
                                for (i = 0; i < name.length; i++) {
                                    if (name[i] === ingredient1.name) {
                                        total = total + quantity[i] * ingredient1.MaxPPG;
                                    }
                                }
                            })
                            console.log("Max PPG of " + Recipe1.name + " is " + total)
                        })
                     
                })
            })
            .catch(error => {


            });


    })
}


module.exports = {
    getData,
    //recipe,
    ingredient,
    calcMaxPPG
}