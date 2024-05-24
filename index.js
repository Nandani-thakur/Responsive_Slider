// // show_menu//
// const navmenu=document.getElementById("nav_menu"),
// navtoggle=document.getElementById('nav_toggle'),
// navclose=document.getElementById('nav_close');



// if(navtoggle){
//     navtoggle.addEventListener('click',()=>{
//         navmenu.classList.add('show_menu');
        

//     })
// }


// if(navclose){
//     navclose.addEventListener('click',()=>{ 
//         navmenu.classList.remove('show_menu');
//         })
// }
// // remove menu mobile//

// const navlink=document.querySelector('.nav_link');
// const linkaction=()=>{
//     const navmenu=document.getElementById('nav_menu');
//     navmenu.classList.remove('show_menu');

// }
// navlink.forEach(n =>n.addEventListener('click',linkaction) );
// // swiper
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       type:'fraction'
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });
// show_menu
const navmenu = document.getElementById("nav_menu"),
      navtoggle = document.getElementById('nav_toggle'),
      navclose = document.getElementById('nav_close');

if (navtoggle) {
    navtoggle.addEventListener('click', () => {
        navmenu.classList.add('show_menu');
    });
}

if (navclose) {
    navclose.addEventListener('click', () => {
        navmenu.classList.remove('show_menu');
    });
}

// remove menu mobile
const navlinks = document.querySelectorAll('.nav_link');

const linkaction = () => {
    const navmenu = document.getElementById('nav_menu');
    navmenu.classList.remove('show_menu');
}

navlinks.forEach(n => n.addEventListener('click', linkaction));

// swiper
const swiperhome = new Swiper('.home_swiper', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
