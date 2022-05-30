searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}
// login form 

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

// my cart from 
let myCartForm = document.querySelector('.my-cart-container');

document.querySelector('#my-cart-btn').onclick = () =>{
  myCartForm.classList.toggle('active');
}

document.querySelector('#close-my-cart-btn').onclick = () =>{
  myCartForm.classList.remove('active');
}

//add to cart
let addCartForm = document.querySelector('.add-cart-container');

document.querySelector('#add-cart-btn1').onclick = () =>{
  addCartForm.classList.toggle('active');
}
document.querySelector('#add-cart-btn2').onclick = () =>{
  addCartForm.classList.toggle('active');
}
document.querySelector('#add-cart-btn3').onclick = () =>{
  addCartForm.classList.toggle('active');
}
document.querySelector('#add-cart-btn4').onclick = () =>{
  addCartForm.classList.toggle('active');
}
document.querySelector('#add-cart-btn5').onclick = () =>{
  addCartForm.classList.toggle('active');
}
document.querySelector('#add-cart-btn6').onclick = () =>{
  addCartForm.classList.toggle('active');
}
document.querySelector('#add-cart-btn7').onclick = () =>{
  addCartForm.classList.toggle('active');
}
document.querySelector('#add-cart-btn8').onclick = () =>{
  addCartForm.classList.toggle('active');
}
document.querySelector('#add-cart-btn9').onclick = () =>{
  addCartForm.classList.toggle('active');
}
document.querySelector('#add-cart-btn10').onclick = () =>{
  addCartForm.classList.toggle('active');
}

document.querySelector('#close-add-cart-btn').onclick = () =>{
  addCartForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});