jQuery(document).ready(function () {

    "use strick"

    $('body').ripples({
        dropRadius: 10,
        pertubance: 0.01,
    })

});

var typed = new Typed(".type", {
    strings: ["Operator",
        "Operator",
        "Silahkan Login"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

// preloader masak 
window.addEventListener('load', () => {
    const preloader = document.querySelector('.loader-masak');
    preloader.classList.add('preloader-selesai');
});
// preloader masak 

// title bergerak
var txt="--Cafetarian UMA--";
var kecepatan=200;var segarkan=null;function bergerak(){ document.title=txt;
txt=txt.substring(1,txt.length)+txt.charAt(0);
segarkan=setTimeout("bergerak()",kecepatan);}bergerak();
// akhir dari title bergerak
