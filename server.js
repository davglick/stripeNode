var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;


app.get('/', function(req, res){
	res.send("hello world")

});

console.log("running on server host " + PORT )
app.listen(PORT);


app.get('/customer', function (res, res){
    
    var customerId = 'user'

});

console.log(__dirname);


// Using Express (http://expressjs.com/)
app.get('/customer', function(request, response) {
  var customerId = '...'; // Load the Stripe Customer ID for your logged in user
  stripe.customers.retrieve(customerId, function(err, customer) {
    if (err) {
      response.status(402).send('Error retrieving customer.');
    } else {
      response.json(customer);
    }

  })

});

