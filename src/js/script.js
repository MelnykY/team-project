$(function(){
$('.reviews-slider').slick({
    arrows:true, 
    dots:true,
    adaptiveHeight:false,
    speed:1000,
    easing:'ease',
    autoplay:true,
    autoplaySpeed:30000,
    waitForAnimate:false
});
});


$(function() {
  $('.gallery__slider').slick({
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
  })
})