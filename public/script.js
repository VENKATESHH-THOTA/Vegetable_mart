let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

 document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click',() =>{
      select.classList.toggle('select-clicked');
      caret.classList.toggle('caret-rotate');
      menu.classList.toggle('menu-open');
   });
   
   options.forEach(Option => {
     Option.addEventListener('click', () => {
       selected.innerText = Option.innerText;
       select.classList.remove('select-clicked');
       caret.classList.remove('caret-rotate');
       menu.classList.remove('menu-open');
       Option.forEach(option => {
          option.classList.remove('active');
       });
       Option.classList.add('active');
     });
   });
});

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active'); 
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#men-btn').onclick = () =>{
    navbar.classList.toggle('active');
    
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active'); 
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');

}

var swiper = new swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,

    },
    centeredSlides: true,
    breakpoints: {
        
      0: {
        slidesPerView: 1,
        },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});