$( document ).ready( function(){
  $( '#addCarButton' ).on( 'click', function(){
      console.log( 'in addCarButton on click');
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
