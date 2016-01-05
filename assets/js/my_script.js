
/******* Horizontal Mouse Scroll ********
$(document).ready(function() {
    $('html, body, *').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
});
*/

/****** Portfolio *******/
$(document).ready(function()
{
  var p = $("#gallery").portfolio();
  p.init();
});

$('.navbar-link').on('click', function()
{
	portfolio.slideTo($(gallery).find('img').first());
});

/*
$('.html-en').on('click', function version()
{
	$('this').load("en/index_en.html");
});
*/


/*
$('#trigger-overlay').on('click', function(){
	console.log('coucou');
})
*/
/*** add href="javascript:void(0)" onclick="version()" à la classe html-en ***
function version()
{
	console.log('coucou');
	*$('#html-en').load("en/index_en.html/#version");*
	window.location = "index_en.html";
	$("#trigger-overlay").get(0).click();
	*$("button").trigger("click");*
};

*/




