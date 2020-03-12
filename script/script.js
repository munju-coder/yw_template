$( document ).ready( function() {

    var menuOffset = $( 'header' ).offset();

    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > menuOffset.top ) {
        $( 'header nav' ).addClass( '.nav_fix' );
      }
      else {
        $( 'header nav' ).removeClass( '.nav_fix' );
      }
    });
    
  });