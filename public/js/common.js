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


$(function () {
 
    $(document).ready(function () {

    var node = $('.card span');
    var str = node.textContent.split(''); //文字を分割strに代入
    var types = []; //ランダム表示する文字のタイプの配列
    var index = []; //始動時の順序の配列。ランダムに表示させるために使用
    var step = 3; //繰り返しの数何週するか
    var fps = 20; //表示スピード
    var strClone = []; //strクローン用の配列
    var typeClone = []; //typeクローン用の配列


    for (var i = 0; i <= str.length; i++) {

        index[i] = i; //文字の長さ分だけ格納。あとでシャッフルする。   
        types[i] = 'symbol'; //randomCharでsymbolを返す。
        typeClone[i] = 'first'; //randomCharでfirstをを返す。

    };

    // ランダム文字を生成して返す。
    var randomChar = function (type) {
        var pool;
        switch (type) {
            case 'symbol':
            pool = '?/\\(^)![]abcdefghijklmnopqrstuvwxyz0123456789{}*&^%$';
            break;
            case 'first':
            pool = '---';
            break;
            default:
            pool = '';
        }

        return pool.charAt(Math.floor(Math.random() * pool.length));
    };

    //初期化。
    var j = 0;
    var k = 0;
    node.textContent = '';

    var ticker = function () {

        if (k > str.length) {
        k = str.length;

    }

    for (var i = Math.max((j + ((step - 1) * - str.length)), 0); i < k;
            i++
    ) {
        strClone[Math.abs(i)] = randomChar(typeClone[Math.abs(i)]);
    if (k >= str.length) {
        typeClone.splice(Math.abs(j - str.length), 1, types[Math.abs(i)]);
    };

    if ((j + ((step - 1) * - str.length)) >= 0) {
        strClone[Math.abs(j + ((step - 1) * - str.length))] = str[Math.abs(j + ((step - 1) * - str.length))];
        };
    };
    node.textContent = strClone.join('');

    if (j === step * str.length) {
            return;

    };
    j++;
    k++;
    return setTimeout(function () {
    ticker();
    }, 1000 / fps);
    };
    ticker();
    });
});