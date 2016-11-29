var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var request = require('request');
var stripe = require("stripe")(
  "sk_test_ndoQxTKblloCG2EDELfg3kJT"
);
var userId = 'cus_9eJc8032au6n26';


app.get('/', function(req, res){
	res.send("APPEAR")

});

console.log("running on server host " + PORT )
app.listen(PORT);


app.get('/customers', function (res, res){
    
    res.send("Doing")

// Using Express (http://expressjs.com/)
stripe.customers.create(
    {
        description: 'New test customer',
        email: 'dav.GGGGGGg@gmail.com'
       
    },

    function(error, response) {

        console.log(response);

    }
);

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



/*

// Using Express (http://expressjs.com/)
app.get('/customer', function(req, res) {
  var customerId = res.userId; // Load the Stripe Customer ID for your logged in user
  stripe.customers.retrieve(customerId, function(err, customer) {
    if (err) {
      response.status(402).send('Error retrieving customer.');
    } else {
      response.json(customer);
    }

  })

});


*/
