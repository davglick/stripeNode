var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var request = require('request');
var bodyParser = require('body-parser');
var stripe = require("stripe")(
  "sk_test_ndoQxTKblloCG2EDELfg3kJT"
);


app.use(bodyParser.json());
// Using Express (http://expressjs.com/)




 app.post('/add-customer', function (req, res) {
    stripe.customers.create(
        { email: req.body.email,
           description: req.body.description
       },
        function(err, customer) {
            err; // null if no error occured
            customer; // the created customer object

            res.json(customer) // Send newly created customer back to client (Swift App)
        }
    );
});

// Post request 

app.post('/createUser', function(req, res) {

	var body = req.body;

	console.log('description: ' + body.description);

	createCustomer();

	res.json(body);

});



//var body = req.body;
//var userId =  ({customer: req.body.customer})


var userId = "cus_9jvJNOqWlxhCOy"
// Using Express (http://expressjs.com/)
app.get('/customer', function(req, res, body) {


  var customerId = userId; // Load the Stripe Customer ID for your logged in user
  stripe.customers.retrieve(customerId, function(err, customer) {
    if (err) {
      response.status(402).send('Error retrieving customer.');
    } else {
    
    console.log(JSON.stringify(body, null, 4));

      res.json(customer);

      console.log(customer.email + "  " +  customer.id)
 

    }

   });

});


app.listen(PORT);