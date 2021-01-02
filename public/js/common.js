// smooth scroll
$(function(){
    $('#p-mainvisual a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.get( 0 ).offsetTop;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});

// slide-animation
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