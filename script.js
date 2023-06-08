

var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');

function cLog(content) {
    console.log(content)
}

if($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {

        var newsItem = document.querySelectorAll('.news__item');
        newsItem.forEach(function (element, index) {
            element.addEventListener('mouseover', function () {
                var x = this.getBoundingClientRect().left;
                var y = this.getBoundingClientRect().top;
                var width = this.getBoundingClientRect().width;
                var height = this.getBoundingClientRect().height;

                $('.item-bg').addClass('active');
                $('.news__item').removeClass('active');
                // $('.news__item').removeClass('active');


                bg.style.width = width + 'px';
                bg.style.height = height + 'px';
                bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
            });

            element.addEventListener('mouseleave', function () {
                $('.item-bg').removeClass('active');
                $('.news__item').removeClass('active');
            });

        });

    });
}


var swiper = new Swiper('.news-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        480: {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
    pagination: {
        el: '.news-slider__pagination',
        clickable: true
    },
    on: {
        init: function () {
            var activeItem = document.querySelector('.swiper-slide-active');

            var sliderItem = activeItem.querySelector('.news__item');

            $('.swiper-slide-active .news__item').addClass('active');

            var x = sliderItem.getBoundingClientRect().left;
            var y = sliderItem.getBoundingClientRect().top;
            var width = sliderItem.getBoundingClientRect().width;
            var height = sliderItem.getBoundingClientRect().height;


            $('.item-bg').addClass('active');

            bg.style.width = width + 'px';
            bg.style.height = height + 'px';
            bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
        }
    }
});

swiper.on('touchEnd', function () {
    $('.news__item').removeClass('active');
    $('.swiper-slide-active .news__item').addClass('active');
});

swiper.on('slideChange', function () {
    $('.news__item').removeClass('active');
});

swiper.on('slideChangeTransitionEnd', function () {
    $('.news__item').removeClass('active');
    var activeItem = document.querySelector('.swiper-slide-active');

    var sliderItem = activeItem.querySelector('.news__item');

    $('.swiper-slide-active .news__item').addClass('active');

    var x = sliderItem.getBoundingClientRect().left;
    var y = sliderItem.getBoundingClientRect().top;
    var width = sliderItem.getBoundingClientRect().width;
    var height = sliderItem.getBoundingClientRect().height;


    $('.item-bg').addClass('active');

    bg.style.width = width + 'px';
    bg.style.height = height + 'px';
    bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
});




  
































/**
 * Velocity Effects
 *
 * First, A few Registered effects for velocity's ui kit.
 * Actual slider stuff below
 */

var scaleDownAmnt = 0.7;
var boxShadowAmnt = "40px";

$.Velocity.RegisterEffect("translateUp", {
  defaultDuration: 1,
  calls: [
    [
      {
        translateY: "-100%"
      },
      1
    ]
  ]
});
$.Velocity.RegisterEffect("translateDown", {
  defaultDuration: 1,
  calls: [
    [
      {
        translateY: "100%"
      },
      1
    ]
  ]
});
$.Velocity.RegisterEffect("translateNone", {
  defaultDuration: 1,
  calls: [
    [
      {
        translateY: "0",
        opacity: "1",
        scale: "1"
      },
      1
    ]
  ]
});
//scale down
$.Velocity.RegisterEffect("scaleDown", {
  defaultDuration: 1,
  calls: [
    [
      {
        opacity: "0",
        scale: "0.7"
      },
      1
    ]
  ]
});

//gallery
$.Velocity.RegisterEffect("scaleDown.moveUp", {
  defaultDuration: 1,
  calls: [
    [
      {
        translateY: "0%",
        scale: scaleDownAmnt
      },
      0.2
    ],
    [
      {
        translateY: "-100%"
      },
      0.6
    ],
    [
      {
        translateY: "-100%",
        scale: "1"
        // boxShadowBlur: '0'
      },
      0.2
    ]
  ]
});
$.Velocity.RegisterEffect("scaleDown.moveUp.scroll", {
  defaultDuration: 1,
  calls: [
    [
      {
        translateY: "-100%",
        scale: scaleDownAmnt
      },
      0.6
    ],
    [
      {
        translateY: "-100%",
        scale: "1"
        // boxShadowBlur: '0'
      },
      0.4
    ]
  ]
});
$.Velocity.RegisterEffect("scaleUp.moveUp", {
  defaultDuration: 1,
  calls: [
    [
      {
        translateY: "90%",
        scale: scaleDownAmnt
        // boxShadowBlur: boxShadowAmnt
      },
      0.2
    ],
    [
      {
        translateY: "0%"
      },
      0.6
    ],
    [
      {
        translateY: "0%",
        scale: "1"
        // boxShadowBlur: '0'
      },
      0.2
    ]
  ]
});
$.Velocity.RegisterEffect("scaleUp.moveUp.scroll", {
  defaultDuration: 1,
  calls: [
    [
      {
        translateY: "0%",
        scale: scaleDownAmnt
        // boxShadowBlur: boxShadowAmnt
      },
      0.6
    ],
    [
      {
        translateY: "0%",
        scale: "1"
        // boxShadowBlur: '0'
      },
      0.4
    ]
  ]
});
$.Velocity.RegisterEffect("scaleDown.moveDown", {
  defaultDuration: 1,
  calls: [
    [
      {
        translateY: "0%",
        scale: scaleDownAmnt
        // boxShadowBlur: boxShadowAmnt
      },
      0.2
    ],
    [
      {
        translateY: "100%"
      },
      0.6
    ],
    [
      {
        translateY: "100%",
        scale: "1"
        // boxShadowBlur: '0'
      },
      0.2
    ]
  ]
});
$.Velocity.RegisterEffect("scaleDown.moveDown.scroll", {
  defaultDuration: 1,
  calls: [
    [{}, 0.6],
    [
      {
        translateY: "100%",
        scale: "1"
        // boxShadowBlur: '0'
      },
      0.4
    ]
  ]
});
$.Velocity.RegisterEffect("scaleUp.moveDown", {
  defaultDuration: 1,
  calls: [
    [
      {
        translateY: "-90%",
        scale: scaleDownAmnt
        // boxShadowBlur: boxShadowAmnt
      },
      0.2
    ],
    [
      {
        translateY: "0%"
      },
      0.6
    ],
    [
      {
        translateY: "0%",
        scale: "1"
        // boxShadowBlur: '0'
      },
      0.2
    ]
  ]
});

/**
 * Velo Slider
 * A Custom Slider using Velocity and Velocity UI effects
 */

var VeloSlider = (function () {
  /**
   * Global Settings
   */
  var settings = {
    veloInit: $(".velo-slides").data("velo-slider"),
    $veloSlide: $(".velo-slide"),
    veloSlideBg: ".velo-slide__bg",
    navPrev: $(".velo-slides-nav").find("a.js-velo-slides-prev"),
    navNext: $(".velo-slides-nav").find("a.js-velo-slides-next"),
    veloBtn: $(".velo-slide__btn"),
    delta: 0,
    scrollThreshold: 7,
    currentSlide: 1,
    animating: false,
    animationDuration: 2000
  };

  // Flags
  var delta = 0,
    animating = false;

  return {
    /**
     * Init
     */
    init: function () {
      this.bind();
    },

    /**
     * Bind our click, scroll, key events
     */
    bind: function () {
      //  Add active to first slide to set it off
      settings.$veloSlide.first().addClass("is-active");

      //  Init with a data attribute,
      //  Binding the animation to scroll, arrows, keys
      if (settings.veloInit == "on") {
        VeloSlider.initScrollJack();
        $(window).on("DOMMouseScroll mousewheel", VeloSlider.scrollJacking);
      }

      // Arrow / Click Nav
      settings.navPrev.on("click", VeloSlider.prevSlide);
      settings.navNext.on("click", VeloSlider.nextSlide);

      // Key Nav
      $(document).on("keydown", function (e) {
        var keyNext = e.which == 39 || e.which == 40,
          keyPrev = e.which == 37 || e.which == 38;

        if (keyNext && !settings.navNext.hasClass("inactive")) {
          e.preventDefault();
          VeloSlider.nextSlide();
        } else if (keyPrev && !settings.navPrev.hasClass("inactive")) {
          e.preventDefault();
          VeloSlider.prevSlide();
        }
      });

      // // Swipes
      // $(window).swipe(function( direction, offset ) {
      //   //if (offset < 100) { return; }
      //   if (direction == "up") {
      //     VeloSlider.prevSlide();
      //     console.log('swipe up');

      //   }
      //   if (direction == "down") { VeloSlider.nextSlide(); }
      // });

      //set navigation arrows visibility
      VeloSlider.checkNavigation();

      // Call Button Hover animation
      VeloSlider.hoverAnimation();
    },

    /**
     * Hover Animation
     * Adds 'is-hovering' class to the current slide
     * when hovering over the button.
     */
    hoverAnimation: function () {
      settings.veloBtn.hover(function () {
        $(this).closest(settings.$veloSlide).toggleClass("is-hovering");
      });
    },

    /**
     * Set Animation
     * Defines the animation sequence, calling our registered velocity effects
     * @see js/components/_velocity-effects.js
     */
    setAnimation: function (midStep, direction) {
      // Vars for our velocity effects
      var animationVisible = "translateNone",
        animationTop = "translateUp",
        animationBottom = "translateDown",
        easing = "ease",
        animDuration = settings.animationDuration;

      // Middle Step
      if (midStep) {
        animationVisible = "scaleUp.moveUp.scroll";
        animationTop = "scaleDown.moveUp.scroll";
        animationBottom = "scaleDown.moveDown.scroll";
      } else {
        animationVisible =
          direction == "next" ? "scaleUp.moveUp" : "scaleUp.moveDown";
        animationTop = "scaleDown.moveUp";
        animationBottom = "scaleDown.moveDown";
      }

      return [
        animationVisible,
        animationTop,
        animationBottom,
        animDuration,
        easing
      ];
    },

    /**
     * Init Scroll Jaclk
     */
    initScrollJack: function () {
      var visibleSlide = settings.$veloSlide.filter(".is-active"),
        topSection = visibleSlide.prevAll(settings.$veloSlide),
        bottomSection = visibleSlide.nextAll(settings.$veloSlide),
        animationParams = VeloSlider.setAnimation(false),
        animationVisible = animationParams[0],
        animationTop = animationParams[1],
        animationBottom = animationParams[2];
      console.log(animationParams);
      console.log(animationParams[4]);

      visibleSlide.children("div").velocity(animationVisible, 1, function () {
        visibleSlide.css("opacity", 1);
        topSection.css("opacity", 1);
        bottomSection.css("opacity", 1);
      });

      topSection.children("div").velocity(animationTop, 0);
      bottomSection.children("div").velocity(animationBottom, 0);
    },

    /**
     * Scroll Jack
     * On Mouse Scroll
     */
    scrollJacking: function (e) {
      if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {
        delta--;
        Math.abs(delta) >= settings.scrollThreshold && VeloSlider.prevSlide();
      } else {
        delta++;
        delta >= settings.scrollThreshold && VeloSlider.nextSlide();
      }
      return false;
    },

    /**
     * Previous Slide
     */
    prevSlide: function (e) {
      //go to previous section
      typeof e !== "undefined" && e.preventDefault();

      var visibleSlide = settings.$veloSlide.filter(".is-active"),
        animationParams = VeloSlider.setAnimation(midStep, "prev"),
        midStep = false;

      visibleSlide = midStep
        ? visibleSlide.next(settings.$veloSlide)
        : visibleSlide;

      console.log(midStep);

      if (!animating && !visibleSlide.is(":first-child")) {
        animating = true;

        visibleSlide
          .removeClass("is-active")
          .children(settings.veloSlideBg)
          .velocity(animationParams[2], animationParams[3], animationParams[4])
          .end()
          .prev(settings.$veloSlide)
          .addClass("is-active")
          .children(settings.veloSlideBg)
          .velocity(
            animationParams[0],
            animationParams[3],
            animationParams[4],
            function () {
              animating = false;
            }
          );
        currentSlide = settings.currentSlide - 1;
      }
      VeloSlider.resetScroll();
    },

    /**
     * Next Slide
     */
    nextSlide: function (e) {
      //go to next section
      typeof e !== "undefined" && e.preventDefault();

      var visibleSlide = settings.$veloSlide.filter(".is-active"),
        animationParams = VeloSlider.setAnimation(midStep, "next"),
        midStep = false;

      if (!animating && !visibleSlide.is(":last-of-type")) {
        animating = true;

        visibleSlide
          .removeClass("is-active")
          .children(settings.veloSlideBg)
          .velocity(animationParams[1], animationParams[3])
          .end()
          .next(settings.$veloSlide)
          .addClass("is-active")
          .children(settings.veloSlideBg)
          .velocity(animationParams[0], animationParams[3], function () {
            animating = false;
          });
        currentSlide = settings.currentSlide + 1;
      }
      VeloSlider.resetScroll();
    },

    /**
     * Reset SCroll
     */
    resetScroll: function () {
      delta = 0;
      VeloSlider.checkNavigation();
    },

    /**
     * Check Nav
     * Adds / hides nav based on first/last slide
     * @todo - loop slides, without cloning if possible
     */
    checkNavigation: function () {
      //update navigation arrows visibility
      settings.$veloSlide.filter(".is-active").is(":first-of-type")
        ? settings.navPrev.addClass("inactive")
        : settings.navPrev.removeClass("inactive");
      settings.$veloSlide.filter(".is-active").is(":last-of-type")
        ? settings.navNext.addClass("inactive")
        : settings.navNext.removeClass("inactive");
    }
  };
})();

// INIT
VeloSlider.init();







// UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})




















const updateProperties = (elem, state) => {
  elem.style.setProperty('--x', `${state.x}px`)
  elem.style.setProperty('--y', `${state.y}px`)
  elem.style.setProperty('--width', `${state.width}px`)
  elem.style.setProperty('--height', `${state.height}px`)
  elem.style.setProperty('--radius', state.radius)
  elem.style.setProperty('--scale', state.scale)
}

document.querySelectorAll('.cursor').forEach(cursor => {
  let onElement

  const createState = e => {
    const defaultState = {
      x: e.clientX,
      y: e.clientY,
      width: 40,
      height: 40,
      radius: '50%'
    }

    const computedState = {}

    if (onElement != null) {
      const { top, left, width, height } = onElement.getBoundingClientRect()
      const radius = window.getComputedStyle(onElement).borderTopLeftRadius

      computedState.x = left + width / 2
      computedState.y = top + height / 2
      computedState.width = width
      computedState.height = height
      computedState.radius = radius
    }

    return {
      ...defaultState,
      ...computedState
    }
  }

  document.addEventListener('mousemove', e => {
    const state = createState(e)
    updateProperties(cursor, state)
  })

  document.querySelectorAll('a, button').forEach(elem => {
    elem.addEventListener('mouseenter', () => (onElement = elem))
    elem.addEventListener('mouseleave', () => (onElement = undefined))
  })
})


AOS.init();
 

