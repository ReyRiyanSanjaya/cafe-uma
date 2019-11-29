$(document).ready(function(){
    var zindex = 10;
    
    $("div.meja").click(function(e){
      e.preventDefault();
  
      var isShowing = false;
  
      if ($(this).hasClass("tampil")) {
        isShowing = true
      }
  
      if ($("div.mejas").hasClass("tampilkan")) {
        // meja ditampilam
        $("div.meja.tampil")
          .removeClass("tampil");
  
        if (isShowing) {
          // meja telah ditampilkan , grid reset
          $("div.mejas")
            .removeClass("tampilkan");
        } else {
          // meja tidak ditampilkan
          $(this)
            .css({zIndex: zindex})
            .addClass("tampil");
  
        }
  
        zindex++;
  
      } else {
        // tidak ada meja yang ditampilkan
        $("div.mejas")
          .addClass("tampilkan");
        $(this)
          .css({zIndex:zindex})
          .addClass("tampil");
  
        zindex++;
      }
      
    });
  });