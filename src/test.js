const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();
sneaks.getProducts("Yeezy Cinder", 10, function(err, products){
    console.log(products)
    console.log(products[0].shoeName)
})
sneaks.getMostPopular(10, function(err, products){
    console.log(products)
    for(const prod of products) {
        console.log(prod.shoeName)
        console.log(prod.thumbnail)
    }
})