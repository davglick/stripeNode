var firebase = require('firebase');
var express = require('express');
var app = express();
var admin = require("firebase-admin");
var PORT = process.env.PORT || 3000;
//var bodyParser = require("body-parser");
var hbs = require("hbs");
var stripe = require("stripe")("sk_test_ndoQxTKblloCG2EDELfg3kJT");om/Users/9PSBwNQJSggqdZ3vl4FU25LMSZr1'

// Initialize Firebase

var config = {
    apiKey: "AIzaSyCnt6EppVeps5n9h6sVEFX-UJAYOQtHNRo",
    authDomain: "appearprofile.firebaseapp.com",
    databaseURL: "https://appearprofile.firebaseio.com",
    storageBucket: "appearprofile.appspot.com",
    messagingSenderId: "522018329506"
  };
  firebase.initializeApp(config);


var userId = userId
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


          } else {

          	paymentRef.set({
	token: '1234433asvcrwe2wrsfdv',
	card: 'Visa',
	default: false

          });

          	console.log('nul')


     }

 })
};

app.get('/', function(req, res){

	res.send('Doing!');
});

initApp()
app.listen(3000);



// Stripe get the user 

// Using Express (http://expressjs.com/)
app.get('/customer', function(req, res) {
  var customerId = userId; // Load the Stripe Customer ID for your logged in user
  stripe.customers.retrieve(customerId, function(err, customer) {
    if (err) {
      res.status(402).send('Error retrieving customer.');
    } else {
      res.json(customer);
    }
  })

  res.send(customerId);

});