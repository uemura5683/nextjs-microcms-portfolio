

$( window ).on( 'load', function() {
    $( '.has-animation' ).waypoint( function( direction ) {
        var activePoint = $( this.element );
        //scroll down
        if ( direction === 'down' ) {
        activePoint.addClass( 'slide-animation' );
        } else {
        activePoint.removeClass( 'slide-animation' );
        }
    },{ offset : '90%' } );
});