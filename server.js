// requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var pg = require( 'pg' );
var config = {
  database: 'garage',
  host: 'localhost',
  port: 5432,
  max: 10
};// end config

var pool = new pg.Pool( config );

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
  // connect to DB
  pool.connect( function(err, connection, done ){
    if( err ){
      console.log( err );
      res.send( 400 )
    } // end error
    else{
      console.log( 'connected to db' );
      // send query to DB that return all cars
      var resultSet = connection.query( "SELECT * from cars" );
      var carsArray = [];
      // translate the resultSet of query to the "cars" array
      resultSet.on( 'row', function( row ){
        carsArray.push( row );
      }); //end on row
      resultSet.on( 'end', function(){
        // after the last row has been pushed send back the object with array
        done();
        res.send( carsArray );
      }); //end
    } // end no error
  }); // end pool connect
}); //end cars get

app.post( '/cars', function( req, res ){
  console.log( 'in /cars post:', req.body );
  pool.connect( function( err, connection, done ){
    if( err ){
      console.log( err );
      res.send( 400 );
    }// end error
    else{
      connection.query( 'INSERT into cars(year, make, model) VALUES( $1, $2, $3 )', [ req.body.year, req.body.make, req.body.model ] );
      done();
      res.send( 200 );
    } // ed no error
  }); //end pool connect
}); //end /cars post
