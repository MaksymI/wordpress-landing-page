$(function() {
    function heightDetect() {
        $(".main_head").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

    $(".toggle_mnu, .top_mnu ul a").click(function() {
        $(".sandwich").toggleClass("active");
    });

     $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
    }).append("<span>");

    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_mnu").fadeIn(600);
             $(".top_mnu li a").addClass("fadeInUp animated");
        };
    });
});


$(window).load(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});
