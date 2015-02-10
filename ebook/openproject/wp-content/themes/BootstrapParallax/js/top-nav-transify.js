/**
 * Created by aistrati on 12/19/14.
 */
jQuery(document).ready(function($) {
    var section2 = $('#section2');
    var tabletResolution = 980;

    if (section2.length != 0) {
        var navBarInner = $('.navbar-inner');
        var backgroundInitial = 'rgba(0, 0, 0, 0.15)';  // black
        var backgroundOnScroll = 'rgba(8, 117, 155, 1)'; // #08759b <=> rgb(8, 117, 155) + opacity
        var fadeSpeed = 1000;

        var elementOffset = section2.offset().top;
        var changeLine = (elementOffset - navBarInner.height());
        var stop = (elementOffset - $(document).scrollTop());
        var i = 0;

        if (stop < 0) {
            navBarInner.animate({
                backgroundColor: backgroundOnScroll
            }, fadeSpeed);
        }

        $(window).resize(function(){
            if($( window ).width() < tabletResolution){
                navBarInner.css({backgroundColor:backgroundOnScroll});
            }
        });

        $(document).on('scroll', function () {

            stop = Math.round($(document).scrollTop());

            if (stop > changeLine) {
                if (i == 0) {
                    i++;
                    navBarInner.animate({
                        backgroundColor: backgroundOnScroll
                    }, fadeSpeed);
                }
            } else {
                if (i == 1) {
                    i--;
                    navBarInner.animate({
                        backgroundColor: backgroundInitial
                    }, fadeSpeed);
                }
            }

            //no fade effect for tablets and mobile
            //because top menu have a drop-down functionality
            if($( window ).width() < tabletResolution){
                navBarInner.css({backgroundColor:backgroundOnScroll});
            }

        });
    }
});