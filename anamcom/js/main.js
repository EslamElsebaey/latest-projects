
$(window).on("load" , function(){
  $(".preloader").fadeOut();


    
        // main Swiper 
const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
   autoplay: true,
   speed : 1000 ,
  draggable: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});
   

  

// App screens Swiper
const appScreens = new Swiper('.app-screens .swiper', {
  loop: true,
  speed : 1000 ,
  autoplay: true,
  allowTouchMove: true,
  centeredSlides: true,
  slideToClickedSlide: true,
  draggable: true,
  navigation: {
    nextEl: ' .app-screens .swiper-button-next',
    prevEl: '.app-screens .swiper-button-prev',
  },
  pagination: {
    el: '.app-screens .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1199: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});



// Clients review swiper

const clientsReview = new Swiper('.client-reviews .swiper', {
  loop: true,
  speed : 1000 ,
  autoplay: true,
  allowTouchMove: true,
  draggable: true,
  navigation: {
    nextEl: ' .client-reviews .swiper-button-next',
    prevEl: '.client-reviews .swiper-button-prev',
  },
  pagination: {
    el: '.client-reviews .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 35,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 1.6,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});



// Fire wow
new WOW().init();
  
})  // End window Load




$(document).ready(function(){
 
  // fire select2
  $('.myselect').select2();


  $('.myform select').select2({
    minimumResultsForSearch: -1
  });

// **************************************************************************************************


// Common Questions

$(".main-question").on("click", function(){
  $(this).children(".ques-answer").slideToggle(300);
  $(this).toggleClass("active").siblings().removeClass("active");
  $(".ques-answer").not($(this).children(".ques-answer")).slideUp(300);
})




// **************************************************************************************************


// fixed header

$(window).on("scroll" , function (){
  if($(window).scrollTop() > 100){
    $("header").addClass("blur-header");
    $(".logo img").attr("src" , "images/anamcom-logo-light.svg")
    
    if($(window).width() > 992){
      $("header").addClass("fixed-header")
    }
    if($(window).width() < 768){
      $("header").addClass("padding-8")
    }
   
  }
  if($(window).scrollTop() == 0){
    $("header").removeClass("fixed-header")
    $("header").removeClass("blur-header")
    $("header").removeClass("padding-8")
    if(!$("body").hasClass("pages-body")){
      $(".logo img").attr("src" , "images/anamcom-logo-dark.svg");
    }
   



  }
})




// open and close nav

let  openBtn = $(".openBtn") ;


openBtn.on("click", function(){
 
  if($(window).width() < 992){
    if($("body").hasClass("pages-body")){
      let currentSrc = $(".logo img").attr("src");
      if (currentSrc == "images/anamcom-logo-light.svg") {
        $(".logo img").attr("src", "images/anamcom-logo-dark.svg");
      } else {
        $(".logo img").attr("src", "images/anamcom-logo-light.svg");
      }
      $(".pages-body header").toggleClass("pages-fixed-header");
    }


    if($(window).scrollTop() > 100){
      $("header").toggleClass("header-mob");
      if(!$("body").hasClass("pages-body")){
        let currentSrc = $(".logo img").attr("src");
        if (currentSrc == "images/anamcom-logo-dark.svg") {
          $(".logo img").attr("src", "images/anamcom-logo-light.svg");
        } else {
          $(".logo img").attr("src", "images/anamcom-logo-dark.svg");
        }
      }
     
    }
  
  }


  $(".navigation").slideToggle(400)
  $("body").toggleClass("overflow-hidden") ;
  $(this).children("i").toggleClass("fa-xmark");

  if($(this).children("i").hasClass("fa-xmark")){
    $(".big-menu li").addClass("opacity-100")
  }else{
    $(".big-menu li").removeClass("opacity-100")
  }
 
   
   
 
})


if($(window).width() < 992 ){
    $(".big-menu li a").on("click" , function(){
      $(".navigation").slideUp(400);
      $(".openBtn i").removeClass("fa-xmark");
      $("body").removeClass("overflow-hidden") ;
      if(!$("body").hasClass("pages-body")){
        $("header").removeClass("header-mob");
      }else{
        $("header").removeClass("pages-fixed-header");
        let currentSrc = $(".logo img").attr("src");
      if (currentSrc == "images/anamcom-logo-light.svg") {
        $(".logo img").attr("src", "images/anamcom-logo-dark.svg");
      } else {
        $(".logo img").attr("src", "images/anamcom-logo-light.svg");
      }
      }
    })
}






// **************************************************************************************************

// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $(window).scrollTop(0);
}) 


// **************************************************************************************************







}) // End  document ready







