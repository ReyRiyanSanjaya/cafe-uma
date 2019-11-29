//   navbar interaksi
jQuery(document).ready(function() {

    "use strick"

    $('header').ripples({
        dropRadius: 10,
        pertubance: 0.01,
    })

});
// navbar 

$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
});