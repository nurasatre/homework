$(document).ready(function() {
    $("#phone").mask('+38 (099) 99 99 999');



    $("a.main-menu__link").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
});