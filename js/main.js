jQuery(document).ready(function(){
    "use strict"
    $('.slider').ripples({
        dropRadius: 13, 
        perturbance: 0.01,
        
      });
    
    $(".text").typed({
        strings:["<strong class='primary'>Guitar</strong> WebShop <strong class='primary'> for</strong> ThePioter18"],
        startDelay: 1200,
        typeSpeed: 60,
        backSpeed: 20,
        loopCount: 2,
        loop: true
    });
    
    // Sticky Navigation 
    $(window).scroll(function(){

        var top = $(window).scrollTop();

        if(top>=60){
            $("nav").addClass('secondary');
        }

        else
            if($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary');
            }

    });

    // Photo gallery
    $('.work').magnificPopup({
        delegate: 'a', // selektor elementów potomnych, klikając na niego otworzy się okienko
        type: 'image',
        gallery: {
            enabled: true,
        }
    });

    // Team members
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});
// nav animation starts greensock
var tl = new TimelineLite; 

tl.from("#brand", 0.6, {
    delay: 0.4,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})
tl.staggerFrom(".nav li a", 0.1, {
    delay: 0.1, 
    opacity: 0, 
    ease: Expo.easeInOut
}, 0.1,);

// nav animation ends

// css animation
new WOW().init();