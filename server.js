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
  // a array for our cars
  var carsArray = [];
  var tempCar = {
    year: 1968,
    make: 'VW',
    model: 'Super Beetle'
  };
  carsArray.push( tempCar );
  res.send( carsArray );
  // connect to DB
  // send query to DB that return all cars
  // translate the resultSet of query to the "cars" array
  // after the last row has been pushed send back the object with array
}); //end cars get
