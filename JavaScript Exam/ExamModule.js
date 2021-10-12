const host = "git.ucc.uwm.edu";
const http = require('http');
const path = require('path');
const OrdersEndpoint = "/orders";

function getData(endpoint) {
    return new Promise(function (resolve, rejects) {
        let options = {
            host: host,
            path: endpoint
        };
        http.get(options, (res) => {
            let responseString = '';
            res.on('data', (data) => {
                responseString += data;
            });
            res.on('end', () => {
                resolve(JSON.parse(responseString));
                // console.log(responseString);
            });
        }).on('error', (err) => {
            rejects(err);
        });
    });
};

function ConOrders(id, customerId, productId, price) {
    this.id = id;
    this.customerId = customerId;
    this.productId = new Array();
    this.price = price;
}

function getOrders() {
    return new Promise(function (resolve, rejects) {
        getData(OrdersEndpoint)
        .then(function (response) {
            total = 0
            response.forEach(item => {
                var Order1 = new ConOrders();
                Order1.Status = item.status;
                Order1.id = item.id;
                Order1.customerId = item.customerId;
                Order1.productId = item.productId;
                Order1.price = item.price;
                 console.log("CustomerID", Order1.customerId, " Ordered ", Order1.productId);
                 total = total + Order1.price;
            });
             console.log("The total revenue is ", total);
        })
    })
}




module.exports = {
    getOrders
}