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


$(function(){
window.addEventListener('load', init);
function init() {
  var effectList = [];
  var elementList = document.querySelectorAll('.card span');

  for (var i = 0; i < elementList.length; i++) {

    var element = elementList[i];
    element.dataset.index = i;

    // インスタンスを取得する
    effectList[i] = new ShuffleText(element);

    // マウスオーバー時に再生する
    element.addEventListener('mouseenter', function () {
      effectList[+this.dataset.index].start();
    });

    // マウスアウト時に再生する
    element.addEventListener('mouseleave', function () {
      effectList[+this.dataset.index].start();
    });

    // 初回を再生する
    effectList[i].start();
  }
}
});