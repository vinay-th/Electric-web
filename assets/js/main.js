;(function($){

  $(document).ready(function(){
  
  //========== HEADER ACTIVE STRATS ============= //
  if ($("#header").length > 0) {
  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 1) {
    $(".header-area").removeClass("sticky");
    } else {
    $(".header-area").addClass("sticky");
    }
    });
  }
  //========== HEADER ACTIVE ENDS ============= //
  
  //========== PROGRESS ACTIVE ENDS ============= //
  progress_bar();
  function progress_bar() {
    var speed = 30;
    var items = $('.progress_bar').find('.progress_bar_item');
      items.each(function() {
          var item = $(this).find('.progress');
          var itemValue = item.data('progress');
          var i = 0;
          var value = $(this);
      
          var count = setInterval(function(){
              if(i <= itemValue) {
                  var iStr = i.toString();
                  item.css({
                      'width': iStr+'%'
                  });
                  value.find('.item_value').html(iStr +'%');
              }
              else {
                  clearInterval(count);
              }
              i++;
          },speed);
      });
  }
  //========== PRICING AREA ============= //
  $("#ce-toggle").click(function (event) {
    $(".plan-toggle-wrap").toggleClass("active");
  });
  
  $("#ce-toggle").change(function () {
    if ($(this).is(":checked")) {
      $(".tab-content #yearly").hide();
      $(".tab-content #monthly").show();
    } else {
      $(".tab-content #yearly").show();
      $(".tab-content #monthly").hide();
    }
  });
  
  $("#ce-toggle1").click(function (event) {
    $(".plan-toggle-wrap1").toggleClass("active");
  });
  
  $("#ce-toggle1").change(function () {
    if ($(this).is(":checked")) {
      $(".tab-content #yearly1").hide();
      $(".tab-content #monthly1").show();
    } else {
      $(".tab-content #yearly1").show();
      $(".tab-content #monthly1").hide();
    }
  });
  //========== PAGE PROGRESS STARTS ============= // 
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
    "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  //========== PAGE PROGRESS STARTS ============= // 
  
  //========== VIDEO POPUP STARTS ============= //
     if ($(".popup-youtube").length > 0) {
      $(".popup-youtube").magnificPopup({
      type: "iframe",
      });
      }
  //========== VIDEO POPUP ENDS ============= //
  AOS.init;
  AOS.init({disable: 'mobile'});
  
  //========== NICE SELECT ============= //
  $('select').niceSelect();
  
  });
  //========== COUNTER UP============= //
  const ucounter = $('.counter');
  if (ucounter.length > 0) {
    try {
      ucounter.countUp();
    } catch (error) {
      console.error('Error while executing countUp:', error);
    }
  } else {
    console.warn('No elements with class "counter" found.');
  }
  //========== TESTIMONIAL AREA ============= //
  
  // testimonial //
    $('.slider-header-carousel').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      dots:true,
      mouseDrag:false,
      items:1,
      autoplay:true,
      vertical:true,
      navText:["<i class='fa-solid fa-angle-up'></i>" , "<i class='fa-solid fa-angle-down'></i>"],
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      active:true,
      smartSpeed:2000,
      autoplayTimeout:4000,
      autoplayHoverPause:false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true,
          },
          600:{
              items:1,
          },
          1000:{
              items:1,
          }
      }
    });
  
    // testimonial //
    $('.casestudy-slider-area').owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      dots:false,
      mouseDrag:true,
      items:10,
      autoplay:true,
      navText:["<i class='fa-solid fa-arrow-left'></i>" , "<i class='fa-solid fa-arrow-right'></i>"],
      smartSpeed:2000,
      autoplayTimeout:2500,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true,
          },
          600:{
              items:2,
          },
          1000:{
              items:3,
          }
      }
    });
  
      // testimonial //
      $('.testimonial-slider-boxarea4').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        mouseDrag:true,
        items:10,
        autoplay:true,
        navText:["<i class='fa-solid fa-arrow-left'></i>" , "<i class='fa-solid fa-arrow-right'></i>"],
        smartSpeed:3000,
        autoplayTimeout:4000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            600:{
                items:2,
            },
            1000:{
                items:2,
            }
        }
      });
    
  
  // testimonial //
  $('.slider-images').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:false,
    mouseDrag:true,
    items:10,
    autoplay:true,
    smartSpeed:2000,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
  });
  
  // testimonial //
  $('.testimonial-slider-area').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    mouseDrag:true,
    items:10,
    autoplay:true,
    smartSpeed:2000,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
  });
  
  
  // testimonial//
  $('.slider-galeria').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    asNavFor: '.slider-galeria-thumbs',
    prevArrow: $('.testimonial-next-arrow'),
    nextArrow: $('.testimonial-prev-arrow'),
  });
  $('.slider-galeria-thumbs').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    items:15,
    arrows: true,
    asNavFor: '.slider-galeria',
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    infinite: false,
    prevArrow: $('.testimonial-next-arrow'),
    nextArrow: $('.testimonial-prev-arrow'),
  });
  
  // testimonial //
  $(".product-slider-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    asNavFor: ".foter-carousel",
    autoplay:true,
    autoplayTimeout:500,
    prevArrow: $('.testimonial-next-arrow'),
    nextArrow: $('.testimonial-prev-arrow'),
  });
  $('.slider-nav1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.foter-carousel',
    dots: false,
    arrows:true,
    nav:true,
    loop:true,
    centerMode: false,
    focusOnSelect: true,
    autoplay:true,
    autoplayTimeout:500,
    prevArrow: $('.testimonial-next-arrow'),
    nextArrow: $('.testimonial-prev-arrow'),
  });
  $('.foter-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay:true,
    nav:true,
    prevArrow: $('.testimonial-next-arrow'),
    nextArrow: $('.testimonial-prev-arrow'),
    fade: true,
    loop:true,
    asNavFor: '.slider-nav1',
  });
  
  // testimonials //
  $('.all-images-area').slick({
    loop:true,
    vertical:true,
    verticalSwiping:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed:9000,
    cssEase: 'linear',
    infinite: true,
    arrows:false,
    touchMove:true,
    swipeToSlide:true,
    swipe:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        autoplay:false,
        }
        },
        
        {
          breakpoint: 600,
          settings: {
            autoplay:false,
        }
        },
  
        {
          breakpoint: 480,
          settings: {
            autoplay:false,
            touchMove:false,
        }
        },
  
        {
          breakpoint: 375,
          settings: {
            autoplay:false,
            touchMove:false,
        }
        },
  
        {
          breakpoint: 320,
          settings: {
            autoplay:false,
            touchMove:false,
        }
        },
      ]
  });
  
  $('.all-images-area2').slick({
    loop:true,
    vertical:true,
    verticalSwiping:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed:8000,
    cssEase: 'linear',
    infinite: true,
    arrows:false,
    touchMove:true,
    swipeToSlide:true,
    swipe:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        autoplay:false,
        }
        },
        
        {
          breakpoint: 600,
          settings: {
            autoplay:false,
        }
        },
  
        {
          breakpoint: 480,
          settings: {
            autoplay:false,
        }
        },
  
        {
          breakpoint: 375,
          settings: {
            autoplay:false,
        }
        },
  
        {
          breakpoint: 320,
          settings: {
            autoplay:false,
        }
        },
      ]
  });
  //========== PRELOADER ============= //
  $(window).on("load", function (event) {
    setTimeout(function () {
      $(".preloader").fadeToggle();
    }, 300);
  });
  //========== PRELOADER AREA ============= //
  
  //========== CURSOR AREA ============= //
  
  //========== GSAP AREA ============= //
  
  gsap.registerPlugin(ScrollTrigger, SplitText);
  gsap.config({
      nullTargetWarn: false,
      trialWarn: false
  });
  function pbmit_title_animation() {
    ScrollTrigger.matchMedia({
        "(max-width: 375px)": function() {
            var pbmit_var = $('.pbmit-heading, .pbmit-heading-subheading');
            if (!pbmit_var.length) {
                return;
            }
            const quotes = document.querySelectorAll(".pbmit-heading .pbmit-title , .pbmit-heading-subheading .pbmit-title");
            quotes.forEach(quote => {
                var getclass = quote.closest('.pbmit-heading ,.pbmit-heading-subheading').className;
                var animation = getclass.split('animation-');
                if (animation[1] == "style4") return
  
                quote.split = new SplitText(quote, {
                    type: "lines,words,chars",
                    linesClass: "split-line"
                });
                gsap.set(quote, { perspective: 400 });
                if (animation[1] == "style1") {
                    gsap.set(quote.split.chars, {
                        opacity: 0,
                        y: "90%",
                        rotateX: "-40deg"
                    });
                }
                if (animation[1] == "style2") {
                    gsap.set(quote.split.chars, {
                        opacity: 0,
                        x: "50"
                    });
                }
                if (animation[1] == "style3") {
                    gsap.set(quote.split.chars, {
                        opacity: 0,
                    });
                }
                gsap.to(quote.split.chars, {
                    scrollTrigger: {
                        trigger: quote,
                        start: "top 90%",
                    },
                    x: "0",
                    y: "0",
                    rotateX: "0",
                    opacity: 1,
                    duration: 1,
                    ease: Back.easeOut,
                    stagger: .02
                });
            });
        },
    });
  }
  
  
  
  })(jQuery);
  
  
  