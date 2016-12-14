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
    )


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



// Using Express (http://expressjs.com/)
app.get('/customer', function(req, res, body) {

//var body = req.body;
//var userId =  ({customers: req.body.customer})
// Using Express (http://expressjs.com/)
//app.get('/customer', function(req, res, body) {


  var userId = "cus_9jvJNOqWlxhCOy"

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

app.post('/check', function(req, res, body) {
stripe.customers.create({
  email: 'foo-customer@example.com'
}).then(function(customer){
  return stripe.customers.createSource(customer.id, {
    object: 'card',
    exp_month: 10,
    exp_year: 2018,
    number: '4242 4242 4242 4242',
    cvc: 100
  });
})

});


app.post('/token', function (req, res) {
    stripe.customers.create(
        { 

          email: req.body.email,
           description: req.body.description
       },
        function(err, customer) {
            err; // null if no error occured
            customer; // the created customer object

            res.json(customer) // Send newly created customer back to client (Swift App)
        }
    )


  });


// Using Express (http://expressjs.com/)
app.post('/customer/sources', function(request, response) {
  var customerId = "cus_9jvJNOqWlxhCOy"; // Load the Stripe Customer ID for your logged in user
  stripe.customers.createSource(customerId, {
    source: request.body.source
  }, function(err, source) {
    if (err) {
      response.status(402).send('Error attaching source.');
    } else {
      response.status(200).end();
    }
  });
});


app.listen(PORT);





/*

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
app.get('/customer', function(request, response, body) {
  //var body = req.body;
 // var userId =  ({customer: req.body.customer})
  var customerId = userId; // Load the Stripe Customer ID for your logged in user
  stripe.customers.retrieve(customerId, function(err, customer) {
    if (err) {
      response.status(402).send('Error retrieving customer.');
    } else {
    
    console.log(JSON.stringify(body, null, 4));

      response.json(customer);

      console.log(customer.email + "  " +  customer.id)
 

    }

   });

});




app.listen(PORT);

*/
