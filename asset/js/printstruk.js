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