function openNav() {
    document.getElementById("keranjang-nav").style.width = "550px";
    document.getElementById("main").style.marginLeft = "550px";
    document.body.style.filter = "rgba(0,0,0,0.4)";
    document.getElementById("bodyhtml").style.filter = "grayscale(100%)";
}

function closeNav() {
    document.getElementById("keranjang-nav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
// buat keranjang belanjaan