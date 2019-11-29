// ketik automatis js 
var typed = new Typed(".type", {
    strings: ["Mudah Makan",
        "Mesan Makan Lewat HP",
        "Ga perlu Nunggu"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

//   swiper slider 
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

// title bergerak
var txt = "--Cafetarian UMA--";
var kecepatan = 200;
var segarkan = null;

function bergerak() {
    document.title = txt;
    txt = txt.substring(1, txt.length) + txt.charAt(0);
    segarkan = setTimeout("bergerak()", kecepatan);
}
bergerak();
// akhir dari title bergerak

// preloader masak 
window.addEventListener('load', () => {
    const preloader = document.querySelector('.loader-masak');
    preloader.classList.add('preloader-selesai');
});
// preloader masak 

// // lazyload dari website kantin 
// const targets = document.querySelectorAll('img');

// const lazyload = target => {
//     const io = new IntersectionObserver((entries, observer) => {

//         enteries.foreach(entry => {
//             console.log('Image berhasil diload');

//             if(entry.IsIntersecting) {
//                 const img = entry.target;
//                 const src = img.getAttribute('data-lazy');

//                 img.setAttribute('src', src);
//                 img.classList.add('fade');

//                 observer.disconnect();
//             };
//         });
//     });

//     io.observe(target);
// };