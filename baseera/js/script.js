

$(window).on("load", function () {
  $(".preloader").fadeOut();






  //  programs swipers

const qualifiedProg = new Swiper('.qualified-prog .swiper', {
  loop: true,
  speed : 1000 ,
  autoplay: true,
  draggable: true,
  observer: true,
  observeParents: true,
 
  pagination: {
    el: '.qualified-prog .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.qualified-prog .swiper-button-next ',
    prevEl: '.qualified-prog .swiper-button-prev',
  },

  breakpoints: {
  
    350: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25
    } , 
    1199: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
const developProg = new Swiper('.develop-prog .swiper', {
  loop: true,
  speed : 1000 ,
  autoplay: true,
  draggable: true,
  observer: true,
  observeParents: true,
 
  pagination: {
    el: '.develop-prog .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.develop-prog .swiper-button-next ',
    prevEl: '.develop-prog .swiper-button-prev',
  },
 
  breakpoints: {
  
    350: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 2,
      spaceBetween: 25
    } , 
    1199: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
const p4cProg = new Swiper('.p4c-prog .swiper', {
  loop: true,
  autoplay: true,
  speed : 1000 ,
  draggable: true,
  observer: true,
  observeParents: true,
 
  pagination: {
    el: '.p4c-prog .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.p4c-prog .swiper-button-next ',
    prevEl: '.p4c-prog .swiper-button-prev',
  },
 
  breakpoints: {
  
    350: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 2,
      spaceBetween: 25
    } , 
    1199: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

// clients reviews swiper 
const clientsReviews = new Swiper('.clients-reviews .swiper', {
  loop: true,
  autoplay: true,
  speed : 1000 ,
  draggable: true,
  pagination: {
    el: '.clients-reviews .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.clients-reviews .swiper-button-next ',
    prevEl: '.clients-reviews .swiper-button-prev',
  },
  breakpoints: {
    350: {
      slidesPerView: 1,
    },
  }
});



// news swiper
const newsSwiper = new Swiper(' .news .swiper', {
  loop: true,
  speed : 1000 ,
  autoplay: true,
  pagination: {
    el: '.news-parent .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.news-parent .swiper-button-next ',
    prevEl: '.news-parent .swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween : 30 ,
    },
    700: {
      slidesPerView: 2,
      spaceBetween : 30 ,
    },
  }
});



// latest-releases swiper

const latestReleases = new Swiper('.latest-releases .swiper', {
  loop: true,
  autoplay: true,
  speed : 1000 ,
  draggable: true,
 
  pagination: {
    el: '.latest-releases .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.latest-releases .swiper-button-next ',
    prevEl: '.latest-releases .swiper-button-prev',
  },

  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 50
    } , 
    992: {
      slidesPerView: 3,
      spaceBetween: 70
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 100
    }
  }
});




// success-partners swiper

if($(window).width()  < 768 ) {
  const successPartners = new Swiper('.success-partners .swiper', {
    loop: true,
    autoplay: true,
    speed : 1000 ,
    draggable: true,
   
    pagination: {
      el: '.success-partners .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.success-partners .swiper-button-next ',
      prevEl: '.success-partners .swiper-button-prev',
    },
    observer: true,
    observeParents: true,
    breakpoints: {
      350: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      600: {
        slidesPerView: 4,
        spaceBetween: 20
      },
    }
  });
}


  //  Fire wow 
  new WOW().init();

})  // End window load

$(document).ready(function(){

// faq section 

$(".main-question").click(function(){
  $(this).children(".ques-answer").slideToggle(300);
  $(this).toggleClass("active").siblings().removeClass("active");
  $(".ques-answer").not($(this).children(".ques-answer")).slideUp(300);
})

/************************************************************************************************** */



// counters


let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;


valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-num"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1 ;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});




/************************************************************************************************** */



// open and close nav

let closeBtn = document.querySelector(".closeBtn"); 
let openBtn = document.querySelector(".bars"); 

closeBtn.addEventListener("click" , function(){
  $("nav").removeClass("open-nav");
  $("body").removeClass("body-overflow-hidden");
})

openBtn.addEventListener("click" , function(){
  $("nav").addClass("open-nav");  
  $("body").addClass("body-overflow-hidden");
})




/************************************************************************************************** */
 

// to top button
$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 


/************************************************************************************************** */



// open search 


$(".open-search-btn").click(function(){
  $(".search").slideToggle(300);
  $(this).children().toggleClass("la-times");
})








/************************************************************************************************** */


// footer nested menu

if($(window).width() < 768){
  $(".footer-title").click(function(e){
    e.preventDefault() ;
    $(this).next().slideToggle(300) ; 
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");
  })
  }
  



/************************************************************************************************** */


// nav nested menu

if($(window).width() <= 992) {
  $(".li-drop > a").click(function (e) {
    e.preventDefault() ;
    $(this).siblings(".ul-drop").slideToggle(300) ;
    $(this).toggleClass("icon-rotate");
    $(".li-drop a").not($(this)).siblings(".ul-drop").slideUp(300);
    $(".li-drop a").not($(this)).removeClass("icon-rotate");
    })
    }
    

/************************************************************************************************** */
// books pagination

$(".pagination-sec-parent a").click(function(e){
  e.preventDefault();
  $(this).addClass("page-active");
  $(".pagination-sec-parent a").not($(this)).removeClass("page-active");
})

/************************************************************************************************** */



//fixed nav

    
  
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 150) {
          $("header").addClass("fixed");
          $(".open-search-btn i").removeClass("la-times") ;
          if($(window).width() > 768){
            $(".main-nav").addClass("main-nav-scroll");
          } 
          if($(window).width() > 992){
            $(".logo .moc-logo").addClass("moc-logo-scroll");
            $(".logo .baseera-logo").addClass("baseera-logo-scroll");
            $(".main-nav").addClass("main-nav-scroll");
            $("nav").addClass("nav-scroll")
          } 
          if($(window).width() < 992){
            $(".search").hide();
            $("header").addClass("header-box-shadow");
            $(".open-search-btn").css("display" , "block");
          }
          
      } else {
          $("header").removeClass("fixed");
          $("header").removeClass("header-box-shadow");
          if($(window).width() > 768){
            $(".main-nav").removeClass("main-nav-scroll");
          } 
          if($(window).width() > 992){
            $(".logo .moc-logo").removeClass("moc-logo-scroll");
            $(".logo .baseera-logo").removeClass("baseera-logo-scroll");
            $(".main-nav").removeClass("main-nav-scroll");
            $("nav").removeClass("nav-scroll")
          } 
          if($(window).width() < 992){
            $("header").removeClass("header-box-shadow");
            $(".open-search-btn").css("display" , "none");
           $(".search").show();
          }
          
         
      }
    });
    var fixedBar = document.querySelector("header"),
    prevScrollposition = $(window).scrollTop();
      
    (window.onscroll = function () {
      var o = $(window).scrollTop();
      prevScrollposition < o && prevScrollposition > 0 ? fixedBar.classList.add("fixsedt") : fixedBar.classList.remove("fixsedt"), (prevScrollposition = o);
    })   
  


// **************************************************************************************************



// show other choice iput 

$("input[type='radio'").click(function(){
 if($(this).is(':checked')) {
  if($(this).is(".other")){
    $(this).parent(".radio-sec").parent(".myradio").siblings(".other-choice").slideDown(300)
  }else{
    $(this).parent(".radio-sec").parent(".myradio").siblings(".other-choice").slideUp(300)
  }
 }
})



 


// show another teacher rigisteration form

$("input[type='checkbox'").click(function(){
  if($('#register').is(':checked')) {
   $(".another-teacher-form").slideDown(300);
  }else{
   $(".another-teacher-form").slideUp(300);
  }
 })

//  ***************************************************************************clientsReviews


//  cart counter

$(".product-counter .plus").click(function(){
  let maxVal = parseInt($(".product-counter input").attr("data-max"));
  let val = $(".product-counter input").val();
  if(val < maxVal){
    val++
  }
  $(".product-counter input").val(val)
})

$(".product-counter .minus").click(function(){
  let minVal = parseInt($(".product-counter input").attr("data-min"));
  let val = $(".product-counter input").val();
  if(val > minVal){
    val--
  }
  $(".product-counter input").val(val)
})




// fire select2

if($('.myselect').length > 0){
  $('.myselect').select2();
  // select arrow rotate
$(".select2-selection").click(function(){
  $(".select2-selection--single").toggleClass("rotate-select-icon");
 })

 // cancel search 
$('.inquiry-form select').select2({
  minimumResultsForSearch: -1
});
}









})  // end of document ready


/************************************************************************************************** */





/************************************************************************************************** */


