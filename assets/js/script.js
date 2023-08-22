// JavaScript for Mobile Menu

const bars = document.getElementById("bars");
const navMenu = document.getElementById("navMenu");

bars.addEventListener("click", () => {
    bars.classList.toggle("active");
    navMenu.classList.toggle("active")
})

// Owl Carousel JavaScript

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
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