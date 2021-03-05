$("#menu").hide();
$("#toggle").click(function() {
    $(this).toggleClass("on");
    $("#menu").slideToggle();
  });

  // Carousel 

  $(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        loop:true,
        margin:10,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:true,
        navigationText:["",""],
        slideSpeed:1000,
        autoPlay:true,
        navigation : false,
    });
});