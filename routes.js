'use strict'; 

var express = require("express");
var router = express.Router();
var stripe = require("stripe")(
  "sk_test_ndoQxTKblloCG2EDELfg3kJT"
);



// GET /questions
// Return all the questions


var userId = 'cus_9hlvkK2t6tMjOn'
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