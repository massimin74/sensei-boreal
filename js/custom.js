$(document).ready(function () {
    $('.navbar').click(function () {
        $('.nav').toggleClass('wide');
    });

    function goToByScroll(id) {
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top},'fast');
        }
        $('.top').click(function() {
            goToByScroll("header");
            return false;
        });
});
