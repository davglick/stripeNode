var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var stripe = require("stripe")(
  "sk_test_ndoQxTKblloCG2EDELfg3kJT"
 var userId = '2343423gjvf3q4234r2f'
);


app.get('/', function(req, res){
	res.send("APPEAR")

});

console.log("running on server host " + PORT )
app.listen(PORT);


app.get('/customer', function (res, res){
    
    var customerId = 'user'

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

