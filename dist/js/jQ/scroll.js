$(function() {
    $(window).scroll(function() {
        $(this).scrollTop() > 50 ? $("#toTop").fadeIn() : $("#toTop").fadeOut()
    }), $("#toTop").click(function() {
        $("html").animate({
            scrollTop: 0
        })
    })
});
