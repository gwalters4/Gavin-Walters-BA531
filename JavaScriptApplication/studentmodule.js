const host = "ba531-javascriptapp-appserver.azurewebsites.net"
const https = require('https');
const path = require('path');

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
                console.log(err.message);
            });    
    });
};

function Recipe(name, ingredients){
    this.name = name;
    this.ingredients = ingredients;
}

function Ingredient(name, maxPPG){
    this.name = name;
    this.maxPPG = maxPPG;
}
function calcMaxPPG(recipeName, recipeEndPoint, ingredientsEndpoint){
    return new Promise(function(resolve, rejects){
        getData(endpoint)
        .then(function(response){
            let total = 0;
            response.grades.forEach(item => {
                total += item.grade;
            });
            return total/response.grades.length;
        }).catch(function(error){
            console.log(error);
        });
    });    
};
module.exports = {
    getData,
    student,
    calcAverage
}