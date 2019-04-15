//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
/*@prepros-prepend modernizr.custom.js
@prepros-prepend jquerypp.custom.js
@prepros-prepend jquery.bookblock.js*/
//@prepros-prepend jquery.fancybox.min.js



$(document).ready(function() {
/* Работа формы */
$(function () {
    var check = $('.check', this),
        email = $('.email', this),
        message = $('.alert_message', this),
        button = $('.button_mail', this);
    $(".form").on("submit", function () {
        var check = $('.check', this),
            message = $('.alert_message', this),
            reNone = /.+/,
            email = $('.email', this),
            button = $('.button_mail', this);
        if (!email.val().match(reNone)) {
            email.css({'borderColor':'red', 'transition':'all .4s ease'});
            message.text('Введите email').slideDown(500);
            return false;
        }
        if (!check.prop("checked")) {
            check.next().css({'color':'red','transition':'all .4s ease'});
            check.next().children().css({'color':'red','transition':'all .4s ease'});
            message.text('Подтвердите соглашение').slideDown(500);
            return false;
        }
        if (email.val() && check) {
            // button.text('Отправляем...');
            button.text('Отправляем...');
            setTimeout(function () {
                button.text('Отправлено!');
            }, 500);
        }
    });
    email.click(function () {
        email.css({"borderColor": "rgb(25, 10, 12)",'transition':'all .4s ease'});
        message.slideUp(500);
    });
    check.click(function () {
        check.next().css({"color": "#fff",'transition':'all .4s ease'});
        check.next().children().css({"color": "#fff",'transition':'all .4s ease'});
        message.slideUp(500);
    });
});

    $("[data-fancybox]").fancybox({
        buttons : [ 
            'slideShow',
            // 'share',
            'zoom',
            'fullScreen',
            // 'download',
            'close'
          ],
        speed: 330,
        loop: true,
        opacity: "auto",
        autoScale: true,
        mouseWheel: true,
        transitionEffect: 'zoom-in-out'
    });
// $(function(){
//     var Page = (function() {
				
//         var config = {
//                 $bookBlock : $( '#bb-bookblock' ),
//                 $navNext : $( '#bb-nav-next' ),
//                 $navPrev : $( '#bb-nav-prev' ),
//                 $navFirst : $( '#bb-nav-first' ),
//                 $navLast : $( '#bb-nav-last' )
//             },
//             init = function() {
//                 config.$bookBlock.bookblock( {
//                     speed : 1000,
//                     shadowSides : 0.8,
//                     shadowFlip : 0.4
//                 } );
//                 initEvents();
//             },
//             initEvents = function() {
                
//                 var $slides = config.$bookBlock.children();

//                 // add navigation events
//                 config.$navNext.on( 'click touchstart', function() {
//                     config.$bookBlock.bookblock( 'next' );
//                     return false;
//                 } );

//                 config.$navPrev.on( 'click touchstart', function() {
//                     config.$bookBlock.bookblock( 'prev' );
//                     return false;
//                 } );

//                 config.$navFirst.on( 'click touchstart', function() {
//                     config.$bookBlock.bookblock( 'first' );
//                     return false;
//                 } );

//                 config.$navLast.on( 'click touchstart', function() {
//                     config.$bookBlock.bookblock( 'last' );
//                     return false;
//                 } );
                
//                 // add swipe events
//                 $slides.on( {
//                     'swipeleft' : function( event ) {
//                         config.$bookBlock.bookblock( 'next' );
//                         return false;
//                     },
//                     'swiperight' : function( event ) {
//                         config.$bookBlock.bookblock( 'prev' );
//                         return false;
//                     }
//                 } );

//                 // add keyboard events
//                 $( document ).keydown( function(e) {
//                     var keyCode = e.keyCode || e.which,
//                         arrow = {
//                             left : 37,
//                             up : 38,
//                             right : 39,
//                             down : 40
//                         };

//                     switch (keyCode) {
//                         case arrow.left:
//                             config.$bookBlock.bookblock( 'prev' );
//                             break;
//                         case arrow.right:
//                             config.$bookBlock.bookblock( 'next' );
//                             break;
//                     }
//                 } );
//             };

//             return { init : init };

//     })();
//     Page.init();
// });

/*Конец документа*/
});