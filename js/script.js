$(document).ready(function() {
    $('#tem-yelow').on('click', function(){
        $('body').removeClass('black');
        $('body').addClass('yellow');
        $('#list-tems li').removeClass('active');
        $(this).addClass('active');
    });
    $('#tem-black').on('click', function(){
        $('body').removeClass('yellow');
        $('body').addClass('black');
        $('#list-tems li').removeClass('active');
        $(this).addClass('active');
    });
    $('#tem-white').on('click', function(){
        $('body').removeClass('yellow');
        $('body').removeClass('black');
        $('#list-tems li').removeClass('active');
        $(this).addClass('active');
    });
});
var vw = $(window).width();
if (vw>1024){
    $("#zoom").anythingZoomer({
        clone: true
    });
    $("#zoom2").anythingZoomer({
        clone: true
    });
    $("#zoom_a1").anythingZoomer({
        clone: true
    });$("#zoom_a2").anythingZoomer({
        clone: true
    });$("#zoom_a3").anythingZoomer({
        clone: true
    });$("#zoom_a4").anythingZoomer({
        clone: true
    });
}
$('.slider-reviews').slick();
$(".slider-reviews").on("init reInit afterChange", function(event, slick, currentSlide, nextSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    $("#reviews p.num .first").text(i);
});
var all_slide = $(".slider-reviews").slick("getSlick").slideCount;

$('#reviews p.num .all').text(all_slide);
$('.slider-portfolio').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed:0,
    speed: 3300,
    arrows:false
});


$(".tabs_caption").on("click", "li:not(.active)", function() {
    $('.cases').removeClass("active");
    $(this)
    .addClass("active")
    .siblings()
    .removeClass("active")
    .closest("div.content")
    .find("div.tabs_content")
    .removeClass("active")
    .eq($(this).index())
    .addClass("active");
});
$('#all_tabs').on('click',function(){
    $(this).addClass("active")
    $('.cases').addClass("active");
    $('.tabs_caption li').removeClass("active");
});
$(".click_file").on('click', function(){
    var input = $(this).siblings("input.file");
    var btn = this;
    $(this).siblings("input.file").click();
    $(input).on('change',function(){
        var file = $(input).val();
        $(btn).text(file);
    });
});



