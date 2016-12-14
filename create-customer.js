/*
'use strict'; 

var express = require("express");
var router = express.Router();
var stripe = require("stripe")(
  "sk_test_ndoQxTKblloCG2EDELfg3kJT"
);


// create a new user to stripe 
 router.post('/add-user', function (req, res, body) {
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

// fetch existing user from stripe 
var userId = 'cus_9gxna1AGThKAna'
router.get('/customer', function(request, response, body) {
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



module.exports = router;

*/