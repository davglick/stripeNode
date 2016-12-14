'use strict'; 

var express = require("express"); 
var app = express();
var jsonParser = require("body-parser").json;
var routes = require("./routes");
var logger = require("morgan");
var stripe = require("stripe")(
  "sk_test_ndoQxTKblloCG2EDELfg3kJT"
);



app.use(logger("dev"));
app.use(jsonParser());

app.use("/add-customer", routes);

app.use("/add-customer", routes); 


//catch 404 and forward to error handler 

app.use(function(req, res, next){
	var err = new Error("Not Found");
	err.status = 404
	next(err);
});

// Error Handler 

app.use(function(err, req, res, next){
   res.status(err.status || 500);
   res.json({
       error: {
       	
   	message: err.message

      }
   });
});

var port = process.env.PORT || 3000; 

app.listen(port, function(){
	console.log("Express server is listening on port", port)

});