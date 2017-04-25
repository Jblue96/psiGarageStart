// requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );

// uses
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( express.static( 'public' ) );

// spin up server
app.listen( 7899, function(){
  console.log( 'server up on: 7899' );
}); // end server up

app.get( '/', function ( req, res ){
  res.sendFile( path.resolve( 'public/views/index.html' ) );
});

app.get( '/cars', function( req, res ){
  console.log( 'in /cars get request' );
  // temp array
  var cars = [ 'car1', 'car2', 'car3' ];
  // connect to DB
  // send query to DB that return all cars
  // translate the resultSet of query to the "cars" array
  // after the last row has been pushed send back the object with array
  var objectToSend={
    status: 200,
    allCars: cars
  }; // end objectToSend
  res.send( objectToSend );
}); //end cars get
