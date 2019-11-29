$(document).ready(function() {
    var zindex = 10;

    $("div.makan").click(function(e) {
        e.preventDefault();

        var isShowing = false;

        if ($(this).hasClass("tampil")) {
            isShowing = true
        }

        if ($("div.makans").hasClass("tampilkan")) {

            $("div.makan.tampil")
                .removeClass("tampil");

            if (isShowing) {

                $("div.makans")
                    .removeClass("tampilkan");
            } else {

                $(this)
                    .css({ zIndex: zindex })
                    .addClass("tampil");

            }

            zindex++;

        } else {
            // no makans in view
            $("div.makans")
                .addClass("tampilkan");
            $(this)
                .css({ zIndex: zindex })
                .addClass("tampil");

            zindex++;
        }

    });
});