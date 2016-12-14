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


var userId = "gkfjrreajgdfjvajfdtr435232"
var auth = firebase.auth();
var ref = firebase.database().ref();
var paymentRef = ref.child('CCard/' + userId );
var paymentRef = paymentRef.push();
var user = firebase.auth().currentUser;
console.log(paymentRef.key);
console.log(PORT);


// check for auth state chagnes 

var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
} else {
  // No user is signed in.
}

initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {

          


          console.log("doing")

          } else {


            

            console.log('nul')


     }

 })
};

app.get('/doing', function(req, res){

  res.send('suuup');
  initApp()

  var user = firebase.auth().currentUser;

if (user) {




} else {

  paymentRef.set({
  token: '1234433asvcrwe2wrsfdv',
  card: 'AMEX',
  default: false

          });
  
    
}

});

initApp()
app.listen(3000);

