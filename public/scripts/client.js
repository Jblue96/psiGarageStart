$( document ).ready( function(){
  console.log( 'JQ' );
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
    } // end success
  }) // end ajax
} // end getCars
