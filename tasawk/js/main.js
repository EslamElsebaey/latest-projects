$(window).on("load", function () {
  $(".preloader-container").fadeOut();
});

$(document).ready(function () {
  // Add fixed header to pages index and reviews
  if ($(window).width() > 992) {
    $(window).on("scroll", function () {
      if ($("body").hasClass("body-home-header")) {
        if ($(window).scrollTop() > 0) {
          $("header").addClass("home-fixedheader");
        }
        if ($(window).scrollTop() == 0) {
          $("header").removeClass("home-fixedheader");
        }
      }
    });
  }

  if ($(window).width() < 992) {
    $("body").removeClass("body-home-header");
  }

  // *************************************************************

  // Fire Select2

  if ($(".myselect").length > 0) {
    // fire select2
    $(".myselect").select2();

    $(".form select").select2({
      minimumResultsForSearch: -1,
    });
  }

  // *************************************************************
// (blog-index & blog-article) topheader slide 
  $(".blog-menu-btn").on("click", function () {
    $(".blog-top-header .topheader-cont").toggleClass("slideIt");
    $(this).children(".icon").toggleClass("rotate");
  });



  // nested nav mobile
  if ($(window).width() <= 992) {
    $(".menu-item-has-children").click(function () {
      $(this).children(".sub-menu").slideToggle(300);
      $(this).children("a").toggleClass("icon-rotate");
      $(".menu-item-has-children")
        .not($(this))
        .children(".sub-menu")
        .slideUp(300);
      $(".menu-item-has-children")
        .not($(this))
        .children("a")
        .removeClass("icon-rotate");
    });
  }


  // Fixed header in mobile
  if ($(window).width() < 992) {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 0) {
        $("header").addClass("fixed-header");
      }
      if ($(window).scrollTop() == 0) {
        $("header").removeClass("fixed-header");
      }
    });
  }



  function addClassToSvgImages() {
    const svgImages = document.querySelectorAll('img[src$=".svg"]');
    svgImages.forEach((svgImage) => svgImage.classList.add("svg"));
  }

  addClassToSvgImages();

  // tooltip

  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  // Fixed top header
  $(window).on("scroll resize", function () {
    if ($(window).width() > 992 && $(window).scrollTop() > 136) {
      $(".page-top-header").addClass("fixed-topheader");
    }
    if ($(window).scrollTop() == 0) {
      $(".page-top-header").removeClass("fixed-topheader");
    }
  });

  // ************************************************************************************************
  // open tasawk btn menu

  $(".contact-div .tasawk-btn ").on("click", function () {
    $("header").toggleClass("open-tasawk-btn-menu");
    $("body").toggleClass("overflow-hidden");
  });

  $(".sub-menu-overlay").on("click", function () {
    $("header").removeClass("open-tasawk-btn-menu");
    $(".page-top-header").removeClass("open-tasawk-btn-menu");
    $("body").removeClass("overflow-hidden");
  });

  if ($(window).width() > 992) {
    $(".topheader-cont .tasawk-btn ").on("click", function () {
      $(".page-top-header").toggleClass("open-tasawk-btn-menu");
      $("body").toggleClass("overflow-hidden");
    });
  }

  // ************************************************************************************************
  // open and close sidebar

  $(".bars").on("click", function () {
    $(".line1").toggleClass("rotate-line1");
    $(".line2").toggleClass("hide-line2");
    $(".line3").toggleClass("rotate-line3");
    $(".navigation").toggleClass("open-sidebar");
    $("body").toggleClass("overflow-hidden");
  });

 
  // ************************************************************************************************

  //************************************************************************************************

  //  open and close footer navigation
  $(".footer-nav-item-title").on("click", function () {
    $(this).siblings(".footer-nav-ul  ").slideToggle(300);
    $(this).toggleClass("mytitle-rotate");
    $(".footer-nav-item-title")
      .not(this)
      .removeClass("mytitle-rotate")
      .siblings(".footer-nav-ul ")
      .slideUp(300);
  });

  // ************************************************************************************************

  // to top

  $(".up-btn").on("click", function () {
    $("html , body").animate({ scrollTop: 0 }, 0);
  });

  // ************************************************************************************************

  // swipers

  // client Sildes Swiper
  const clientSildesSwiper = new Swiper(".workSamples-swiper .swiper", {
    loop: true,
    autoplay: true,
    speed: 800,
    navigation: {
      nextEl: ".workSamples-swiper .swiper-button-next",
      prevEl: ".workSamples-swiper .swiper-button-prev",
    },
    pagination: {
      el: ".workSamples-swiper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  // client Sildes Swiper
  const softwareWorksamples = new Swiper(".software-worksamples .swiper", {
    loop: true,
    autoplay: true,
    speed: 800,
    navigation: {
      nextEl: ".software-worksamples .swiper-button-next",
      prevEl: ".software-worksamples .swiper-button-prev",
    },
    pagination: {
      el: ".software-worksamples .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  const mobileAppsWorksamples = new Swiper(".mobileApps-worksamples .swiper", {
    loop: true,
    autoplay: true,
    speed: 800,
    navigation: {
      nextEl: ".mobileApps-worksamples .swiper-button-next",
      prevEl: ".mobileApps-worksamples .swiper-button-prev",
    },
    pagination: {
      el: ".mobileApps-worksamples .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // clients Review swiper
  const clientsReview = new Swiper(".clients-review .main-swiper", {
    loop: true,
    autoplay : true ,
    speed: 800,
    navigation: {
      nextEl: ".clients-review  .swiper-button-next",
      prevEl: ".clients-review  .swiper-button-prev",
    },

    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
    pagination: {
      el: ".clients-review .swiper-pagination",
      clickable: true,
    },
  });

  // clients Review swiper
  const homeClientsReviews = new Swiper(".home-clients-review .swiper", {
    loop: true,
    speed: 800,
    autoplay : true ,
    navigation: {
      nextEl: ".home-clients-review .swiper-button-next",
      prevEl: ".home-clients-review .swiper-button-prev",
    },
    pagination: {
      el: ".home-clients-review .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  //************************************************************************************************

  // Marquee

  // block 1 marquee

  $(" #workSamples .block1").marquee({
    duration: 23000,
    gap: 50,
    delayBeforeStart: 0,
    direction: "up",
    duplicated: true,
    startVisible: true,
  });

  // block 2 marquee

  $("#workSamples .block2").marquee({
    duration: 23000,
    gap: 50,
    delayBeforeStart: 0,
    direction: "down",
    duplicated: true,
    startVisible: true,
  });

  // block 3 marquee

  $(" #workSamples .block3").marquee({
    duration: 23000,
    gap: 50,
    delayBeforeStart: 0,
    direction: "up",
    duplicated: true,
    startVisible: true,
  });

  //  partneres marquee

  $(" #partners .block1-marquee").marquee({
    duration: 35000,
    gap: 24,
    delayBeforeStart: 0,
    direction: "right",
    duplicated: true,
    startVisible: true,
  });

  $(" #partners .block2-marquee").marquee({
    duration: 20000,
    gap: 24,
    delayBeforeStart: 0,
    direction: "right",
    duplicated: true,
    startVisible: true,
  });

  const draggables = document.querySelectorAll(".draggable"),
    containers = document.querySelectorAll(".wrapper-cont");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
      draggable.classList.add("dragDone");
    });

    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
      draggable.classList.add("dragDone");

      // let oldSrc = draggable.querySelector(".darggable-cont img").getAttribute("src")
      // if(draggable.classList.contains("dragDone")){
      //   var childElement = draggable.querySelector(".darggable-cont img");
      //   if (childElement) {
      //       childElement.setAttribute("src", "images/pages/software-dev/special-soft-sec/Solid-check.svg");
      //   }
      // }else{
      //   childElement.setAttribute("src", oldSrc);
      // }
    });
  });

  const getDragAfterElement = (container, y) => {
    const draggableElements = [
      ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];
    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  };

  containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(container, e.clientY);
      const draggable = document.querySelector(".dragging");
      if (afterElement == null) {
        container.appendChild(draggable);
      } else {
        container.insertBefore(draggable, afterElement);
      }
    });
  });

  //************************************************************************************************

  let $article = $("#Article");
  let $progressBar = $(".progress");
  let articleHeight = $article.prop("scrollHeight");

  if ($article.length && $progressBar.length) {
    $(window).scroll(function () {
      let scrollTop = $(window).scrollTop() - $article.offset().top;
      if (scrollTop > 0) {
        let progress = Math.floor(Math.min(scrollTop / articleHeight, 1) * 100);
        $progressBar.css("width", progress + "%");
      }
    });
  }

  //************************************************************************************************
});
