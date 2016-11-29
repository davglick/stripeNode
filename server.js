var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var require('request');
var stripe = require("stripe")(
  "sk_test_ndoQxTKblloCG2EDELfg3kJT"
);
var userId = '2343423gjvf3q4234r2f';

request({url: url, json: true,})

app.get('/', function(req, res){
	res.send("APPEAR")

});

console.log("running on server host " + PORT )
app.listen(PORT);


app.get('/customers', function (res, res){
    
    res.send("Doing")

});


// Using Express (http://expressjs.com/)
app.get('/customer', function(request, response) {
  var customerId = userId; // Load the Stripe Customer ID for your logged in user
  stripe.customers.retrieve(customerId, function(err, customer) {
    if (err) {
      response.status(402).send('Error retrieving customer.');
    } else {
      response.json(customer);
    }

  })

});

