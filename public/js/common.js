// smooth scroll
$(function(){

  let preferscolorscheme = function( target ) {
    if( target.attr('data-set-color') == 'light' ) {
      $('header')
        .addClass('light')
        .removeClass('dark');
    } else if( target.attr('data-set-color') == 'dark' ) {
      $('header')
        .addClass('dark')
        .removeClass('light');
    } else {
      $('header')
        .addClass('dark')
        .removeClass('light');
    }
  }

  // slide-animation
  $( window ).on( 'scroll resize load', function() {
    $( '.has-animation' ).waypoint( function( direction ) {
        var activePoint = $( this.element );
        //scroll down
        if ( direction === 'down' ) {
          activePoint.addClass( 'slide-animation' );
        }
    },{ offset : '90%' } );

    $( 'section[id*="p-"]' ).waypoint( function( direction ) {
      var activePoint = $( this.element );
      //scroll down
      if ( direction === 'down' ) {
        preferscolorscheme(activePoint);
      } else {
        preferscolorscheme(activePoint);
      }
    },{ offset : '0%' } );
  });

});
