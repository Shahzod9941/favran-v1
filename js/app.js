
// Close menu
$("#close-menu").click(function(e) {
        e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});
// Open menu
$("#menu-toggle").click(function(e) {
        e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});


let swiper1 = new Swiper(".swiper1", {
    loop: true,
    slidesPerView: 1,
  
     // If we need pagination
     pagination: {
      el: '.swiper-pagination',
    },
    spaceBetween: 20,
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

let swiper2 = new Swiper(".swiper2", {
  loop: true,
  slidesPerView: 6,

  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    540: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
   },
});
  

let swiper3 = new Swiper(".swiper3", {
  loop: true,
  slidesPerView: 5,

  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
  

let swiper4 = new Swiper(".swiper4", {
  loop: true,
  slidesPerView: 5,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
  




























$("#showMenuBtn").on("click",showHideMenu);

function showHideMenu(){
  $(".side-menu-container").toggleClass("hide-side-menu");
  $("#nav-panel").toggleClass("nav-side-animation");
}

$(".side-menu-container").on("click",function(e){
   if(e.target.id !=="nav-panel"){
     showHideMenu();
   }
});