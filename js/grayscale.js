/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(function() {
    collapseNavbar();
    visibleIntroPicture = true;
    //If desktop
    if(window.innerWidth > 767) {
        visibleIntroPicture = false;
        $('.reveal-picture').one('mouseover',function() {
            showIntroPicture()
        });
        $(window).scroll(showIntroPicture);
    }

});

function showIntroPicture() {
    if(!visibleIntroPicture) {
        visibleIntroPicture = true;
        var color = {gray:1, blur:3};
        TweenMax.to(color, 1.5, {gray:0, blur:0, onUpdate:applyColor, onUpdateParams:[$('.intro-picture')]})
        function applyColor(element) {
          element.css("-webkit-filter", "grayscale(" + color.gray + ") blur(" + color.blur + "px)");
        }

        $('.intro-cta').addClass('revealed');
    }
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});
