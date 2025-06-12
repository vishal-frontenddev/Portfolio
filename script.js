// hamb

let nav = document.querySelector(".side-bar")
let hamb = document.querySelector(".mob-hamb i")


let num = 0;

hamb.addEventListener("click", () => {

    if (num == 0) {
        nav.style.left = 0
        num = 1;
        hamb.setAttribute("class", "fa-solid fa-xmark")
    }

    else {
        nav.style.left = "-100%"
        num = 0;
        hamb.setAttribute("class", "fa-solid fa-bars")
    }

})


let about = document.querySelector(".about-link")
let resume = document.querySelector(".resume-link")
let work = document.querySelector(".work-link")
let contact = document.querySelector(".contact-link")

let aboutPage = document.querySelector(".about-page")
let resumePage = document.querySelector(".resume-page")
let workPage = document.querySelector(".work-page")
let contactPage = document.querySelector(".contact-page")


about.addEventListener("click", () => {

    aboutPage.style.display = "flex"
    resumePage.style.display = "none"
    workPage.style.display = "none"
    contactPage.style.display = "none"
    num = 0;
    hamb.setAttribute("class", "fa-solid fa-bars")

    about.classList.add("active")
    resume.classList.remove("active")
    work.classList.remove("active")
    contact.classList.remove("active")


    if (window.matchMedia("(max-width: 800px)").matches) {

        nav.style.left = "-100%"
    }

})

resume.addEventListener("click", () => {

    resumePage.style.display = "flex"
    aboutPage.style.display = "none"
    workPage.style.display = "none"
    contactPage.style.display = "none"
    num = 0;
    hamb.setAttribute("class", "fa-solid fa-bars")

    about.classList.remove("active")
    resume.classList.add("active")
    work.classList.remove("active")
    contact.classList.remove("active")


    if (window.matchMedia("(max-width: 800px)").matches) {

        nav.style.left = "-100%"

    }

})

work.addEventListener("click", () => {

    resumePage.style.display = "none"
    aboutPage.style.display = "none"
    workPage.style.display = "flex"
    contactPage.style.display = "none"
    num = 0;
    hamb.setAttribute("class", "fa-solid fa-bars")


    about.classList.remove("active")
    resume.classList.remove("active")
    work.classList.add("active")
    contact.classList.remove("active")

    if (window.matchMedia("(max-width: 800px)").matches) {

        nav.style.left = "-100%"

    }

})

contact.addEventListener("click", () => {

    aboutPage.style.display = "none"
    resumePage.style.display = "none"
    workPage.style.display = "none"
    contactPage.style.display = "flex"
    num = 0;
    hamb.setAttribute("class", "fa-solid fa-bars")

    about.classList.remove("active")
    resume.classList.remove("active")
    work.classList.remove("active")
    contact.classList.add("active")


    if (window.matchMedia("(max-width: 800px)").matches) {

        nav.style.left = "-100%"

    }

})


// resume progres

let btnClick = document.querySelector('.resume-link');
let htmlProgress = document.querySelector('.html');

let cssProgress = document.querySelector('.css')

let bootstrapProgress = document.querySelector('.bootstrap')

let jsProgress = document.querySelector('.javascript')

let figmaProgress = document.querySelector('.figma')

let swipperProgress = document.querySelector('.swipper-js')

let reactProgress = document.querySelector('.react')

let jqueryProgress = document.querySelector('.jquery')

let talwindProgress = document.querySelector('.talwind')

let wordProgress = document.querySelector('.wordpress')

btnClick.addEventListener('click', () => {

    setTimeout(() => {

        htmlProgress.classList.add("prog")

        cssProgress.classList.add("prog-2")

        bootstrapProgress.classList.add("prog-3")

        jsProgress.classList.add("prog-4")

        figmaProgress.classList.add("prog-5")

        swipperProgress.classList.add('prog-6')

        reactProgress.classList.add('prog-7')

        jqueryProgress.classList.add('prog-8')

        talwindProgress.classList.add('prog-9')

        wordProgress.classList.add('prog-10')

    }, 2000);


})


// loader
// let randomTime = Math.floor(Math.random() * 3000) + 3000;
// console.log(randomTime);

let loaderPage = document.querySelector('.loader');

setTimeout(() => {

    loaderPage.style.visibility = "hidden"

},3000);



// swipper slider

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },


});

// skills slide

const brandSlider = document.getElementById("brandSlider");
const bndSliderClone = brandSlider.innerHTML;
brandSlider.innerHTML += bndSliderClone;

let brandPosition = 0;
const brandSpeed = 1; // Speed of the marquee

function animateBrandSlider() {
  brandPosition -= brandSpeed;
  if (brandPosition <= -brandSlider.scrollWidth / 2) {
    brandPosition = 0;
  }
  brandSlider.style.transform = `translateX(${brandPosition}px)`;
  requestAnimationFrame(animateBrandSlider);
}

animateBrandSlider();
