
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


var firebase = require('firebase');
//var admin = require("firebase-admin");
//var bodyParser = require("body-parser");

var config = {
    apiKey: "AIzaSyCnt6EppVeps5n9h6sVEFX-UJAYOQtHNRo",
    authDomain: "appearprofile.firebaseapp.com",
    databaseURL: "https://appearprofile.firebaseio.com",
    storageBucket: "appearprofile.appspot.com",
    messagingSenderId: "522018329506"
  };
  firebase.initializeApp(config);
var auth = firebase.auth();
var ref = firebase.database().ref();
//var paymentRef = ref.child('CCard/' + userId );
//var paymentRef = paymentRef.push();
var user = firebase.auth().currentUser;
//console.log(paymentRef.key);
console.log(PORT);



// check for auth state chagnes 

initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {

    console.log("logged in")
    paymentRef.set({
	token: '1234433asvcrwe2wrsfdv',
	card: 'Visa',
	default: false
	 })

          } else {

    


          	console.log('nul')


     }

 })
};




app.get('/doing', function(req, res){

	res.send('what is cracking');
	initApp()
	
});

initApp()




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

var firebase = require('firebase');
var express = require('express');
var app = express();
//var admin = require("firebase-admin");
var PORT = process.env.PORT || 3000;
//var bodyParser = require("body-parser");

var stripe = require("stripe")("sk_test_ndoQxTKblloCG2EDELfg3kJT");


// Initialize Firebase

var config = {
    apiKey: "AIzaSyCnt6EppVeps5n9h6sVEFX-UJAYOQtHNRo",
    authDomain: "appearprofile.firebaseapp.com",
    databaseURL: "https://appearprofile.firebaseio.com",
    storageBucket: "appearprofile.appspot.com",
    messagingSenderId: "522018329506"
  };
  firebase.initializeApp(config);


var userId = "asfjk3234f3454gerpt4"
var auth = firebase.auth();
var ref = firebase.database().ref();
var paymentRef = ref.child('CCard/' + userId );
var paymentRef = paymentRef.push();
var user = firebase.auth().currentUser;
console.log(paymentRef.key);
console.log(PORT);


// check for auth state chagnes 

initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {

          	paymentRef.set({
	token: '1234433asvcrwe2wrsfdv',
	card: 'Visa',
	default: false

          });


          console.log("doing")

          } else {

          	

          	console.log('nul')


     }

 })
};

app.get('/', function(req, res){

	res.send('Doing!');
});

initApp()
app.listen(3000);


