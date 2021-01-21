// fits home page to device's screen
$(document).ready(function(){
  $('.header').height($(window).height());
})

// makes navbar collapse when link is pressed
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

 // Disable overscroll / viewport moving on everything but scrollable divs
 $('body').on('touchmove', function (e) {
         if (!$('.scrollable').has($(e.target)).length) e.preventDefault();
 });
