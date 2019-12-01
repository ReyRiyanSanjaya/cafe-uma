function Printstruk() {

    var toPrint = document.getElementById('body');
    var popupWin = window.open('');

    popupWin.document.open();

    popupWin.document.write('<html><title>::Print Data::</title><link rel="stylesheet" type="text/css" href="../asset/css/print.css" /></head><body onload="window.print()">')
    popupWin.document.write(toPrint.outerHTML);
    popupWin.document.write('</html>');
    popupWin.document.close();
}
// untuk print struk

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