// fits home page to device's screen
$(document).ready(function(){
  $('.header').height($(window).height());
})

// makes navbar collapse when link is pressed
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
