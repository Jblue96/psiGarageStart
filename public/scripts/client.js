$( document ).ready( function(){
  $( '#addCarButton' ).on( 'click', function(){
      console.log( 'in addCarButton on click');
      var objectToSend = {
        year: $( '#yearIn' ).val(),
        make: $( '#makeIn' ).val(),
        model: $( '#modelIn' ).val()
      }; //end objectToSend
      console.log( 'sending:', objectToSend );
      $.ajax({
        url: '/cars',
        type: 'POST',
        data: objectToSend,
        success: function( response ){
          console.log( 'back from server with:', response );
          getCars();
        } // end success
      }); //end ajax
  }); // end addCarButton on click

  getCars();
});

function getCars(){
  // get call to server for cars
  $.ajax({
    url: '/cars',
    type:'GET',
    success: function( response ){
      console.log( 'back from server with:', response );
      // update dom
      showCars( response );
    } // end success
  }) // end ajax
} // end getCars

function showCars( carsArray ){
  console.log( 'in showCars' );
  var outputDiv = $( '#outputDiv' );
  outputDiv.empty();
  for (var i = 0; i < carsArray.length; i++) {
    outputDiv.append( '<p>' + carsArray[i].year + ' ' + carsArray[i].make + ' ' + carsArray[i].model + '</p>' );
  } //end for
} //end showCars
