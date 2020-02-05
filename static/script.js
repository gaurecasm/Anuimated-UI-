$(document).ready(function(){
    $(window).scroll(function(){
        var positonTop = $(document).scrollTop();
        console.log(positonTop);
    });
});



// we are creatives start
var $animation= $('.addView');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('flipper');
    } else {
      $element.removeClass('flipper');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

// we are creatives end


// recent works start


var $animation_elements = $('.recent');
var $window = $(window);

function check_if_in_work() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('tilt-in-fwd-tr ');
    } else {
      $element.removeClass('tilt-in-fwd-tr ');
    }
  });
}

$window.on('scroll resize', check_if_in_work);
$window.trigger('scroll');


// recent works end
