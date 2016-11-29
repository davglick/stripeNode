var request = require('request');
var url = 'http://localhost:3000/customer'
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var request = require('request');
var stripe = require("stripe")(
  "sk_test_ndoQxTKblloCG2EDELfg3kJT"
);
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

          	console.log("logged in")

          } else {

    
    paymentRef.set({
	token: '1234433asvcrwe2wrsfdv',
	card: 'Visa',
	default: false
    
	

         // });

          	console.log('nul')


     }

 })
};

app.get('/doing', function(req, res){

	res.send('Doing!');
	initApp()

});

initApp()
