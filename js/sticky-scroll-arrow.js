var win      = $(window),
    fxel     = $('.header_wrapp'),
    fix      = $('#main-content'),
    eloffset = fxel.offset().top;

win.scroll(function() {
    if (eloffset < win.scrollTop()) {
        fxel.addClass("fixed"),
        fix.addClass("sticky");
    } else {
        fxel.removeClass("fixed"),
        fix.removeClass("sticky");
    }
});
$(document).ready(function() {
	$('a[data-rel="relativeanchor"]').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	}); 
	$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                     
    }, 1000);
	});
});
/*function humburgFunction() {
    var x = document.getElementById("topnav-main");
    if (x.className === "topnav-main-header-menu") {
        x.className += " responsive";
    } else {
        x.className = "topnav-main-header-menu";
    }
}*/
function humburgFunction() {
	$('#topnav-main').toggleClass("responsive");
	$('#header-logo_wrapp').toggleClass("vert-top");
}
$(document).ready(function(){
	$('.slider').slick({
		prevArrow: "<i class='fa fa-chevron-left slick-arrow-prev' aria-hidden='true'></i>",
		nextArrow: "<i class='fa fa-chevron-right slick-arrow-next' aria-hidden='true'></i>",
	});
});