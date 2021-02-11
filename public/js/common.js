// smooth scroll
$(function(){
  $('#p-mainvisual a[href^="#"]').click(function(){
      var speed = 300;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.get( 0 ).offsetTop;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
  });

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


    var effectList = [];
    var elementList = document.querySelectorAll('.card li');

    for (var i = 0; i < elementList.length; i++) {

      var element = elementList[i];
      text = element.childNodes[1];

      text.dataset.index = i;

      // インスタンスを取得する
      effectList[i] = new ShuffleText(text);

      element.addEventListener('mouseenter', function () {
        ShuffleStart( this );
      });

      element.addEventListener('mouseout', function () {
        ShuffleStart( this );
      });

      // 初回を再生する
      effectList[i].start();
    }

    let ShuffleStart = function ( target ) {
      dates = target.childNodes[1];
      effectList[dates.dataset.index].start();
    }

});
