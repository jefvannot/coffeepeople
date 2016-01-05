
//global variables
var responsiveflag = false;
var windowWidth = 640;
var windowHeight = 320;
var $_SITE_ROOT = "";


var is_mobile_format;

var t_login;
var link_eshop_value;
var link_cart_value;


var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false );
var iPad = ( navigator.userAgent.match(/(iPad)/i) ? true : false );
var iPhone = ( navigator.userAgent.match(/(iPhone|iPod)/i) ? true : false );
var android = ( navigator.userAgent.match(/(android)/i) ? true : false );
var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

var page_href = "";
if(window.location.href) page_href = window.location.href;

function mobileAndTabletcheck() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

function mobilecheck() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

var isMobileOrTablet = mobileAndTabletcheck();
var isMobile = mobilecheck();


function verticalAlign($content,$usePadding){
	$container = $content.parent();
	
	var contentHeight = $content.innerHeight();	
	var containerHeight = $container.innerHeight();	
	
	var y = (containerHeight - contentHeight) / 2;

	
	if($usePadding){
		$content.css("padding-top", y + "px");
	}else{
	
		$content.css("margin-top", y + "px");
	}
}

function fitUpdate($element){
	
	if(!$element) $element = $("body");
	$element.find(".verticalAlign").each(function(index, element) {
		verticalAlign($(this));
	});
	$element.find(".verticalAlignPadding").each(function(index, element) {
		verticalAlign($(this),true);
	});
	
	
	
}

function isMail($mail){
	var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
	if (reg.test($mail)) return true;
	return false;
}


function lomi_close_menu(){
	TweenLite.to("#lomi_top_menu",0.3,{right:"-280px"});
	return false;
}

function lomi_open_menu(){
	TweenLite.to("#lomi_top_menu",0.3,{right:"0"});
	return false;
}



function checkSize(){
	$("body").addClass("checkSize");		
	windowWidth = $("#sizeChecker").width();	
	windowHeight = $("#sizeChecker").height();	
	$("body").removeClass("checkSize");
	


	
	//switch CSS
	/*
	if(windowWidth >= 998){
		$("body").removeClass("res_768");
		$("body").removeClass("res_480");
		$("body").removeClass("res_320");
		isSmallScreen = false;
		debug("res::MAX");
	}
	else if(windowWidth >= 768){
		$("body").addClass("res_768");
		$("body").removeClass("res_480");
		$("body").removeClass("res_320");
		isSmallScreen = false;
		debug("res::768>998");
	}
	else if(windowWidth >= 480){
		$("body").addClass("res_768");
		$("body").addClass("res_480");
		$("body").removeClass("res_320");
		isSmallScreen = true;
		debug("res::480>768");
	}
	else{
		$("body").addClass("res_768");
		$("body").addClass("res_480");
		$("body").addClass("res_320");
		isSmallScreen = true;
		debug("res::320>480");
	}
	*/
	
	if(windowWidth < 640){
		$("body").addClass("res_320");
	}else{
		$("body").removeClass("res_320");
	}
	
	if(windowWidth < 760){
		is_mobile_format = true;
		$("body").addClass("res_640");
	}else{
		is_mobile_format = false;
		$("body").removeClass("res_640");
	}
	
	
	var halfRapport = 515/435;
	var halfH = windowWidth/2 / halfRapport;
	
	
	$(".halfBloc").each(function(index, element) {
		var t = $(this).find(".txt");
		
		
        $(this).css("height",halfH + "px");
		t.css("height",halfH + "px");
		
		
		/*
		var ttop = (halfH - t.innerHeight()) / 2;
		t.css("top",ttop+"px");*/
		/*
		t.css("height",$(this).innerHeight() + "px");
		t.html("<div class='verticalAlign'>"+t.html()+"</div>");*/
    });
	

	
	$(document).trigger('SIZE_CHANGED');
	fitUpdate();
}

//window.addEventListener('resize', checkSize, false);
window.onresize = checkSize;


//////////////////////////////////////////////////////////////////////////////////////////

function checkHomeVideo(){
	//<div id="homepage-slider">
	//bg
	var homepageslider = $("#homepage-slider");
	
	
	
	var imgSrc = $("#homepage-slider .bg").attr("src");
	//console.log("imgSrc : " + imgSrc);
	homepageslider.css("background-image","url("+imgSrc+")");
	
	if(homepageslider.length == 0) return false;
	if(isMobileOrTablet) return false;
	//return false;
	
	
	var videoMp4 = $_SITE_ROOT + "videos/home.mp4";
	var videoOgv = $_SITE_ROOT + "videos/home.ogv";
	var videoWebm = $_SITE_ROOT + "videos/home.webm";
	var videoFlv = $_SITE_ROOT + "videos/home.flv";
	var swf = $_SITE_ROOT + "videos/homeVideoPlayer.swf";
	

	var videoBg = "<div id='videoBg'>";
	videoBg += "<video width='100%' height='100%' loop preload autoplay autobuffer poster='"+imgSrc+"'>";
	videoBg += "<source src='"+videoMp4+"' type='video/mp4' />";
	videoBg += "<source src='"+videoOgv+"' type='video/ogg' />";
	videoBg += "<source src='"+videoWebm+"' type='video/webm' />";
	videoBg += "<object width='100%' height='100%' type='application/x-shockwave-flash' data='"+swf+"'>";
	videoBg += "<param name='movie' value='"+swf+"' />";
	videoBg += "<param name='flashvars' value='file="+videoFlv+"' />";
	videoBg += "<img src='"+imgSrc+"' class='bg'  />";
	videoBg += "</object>";
	videoBg += "</video>";
	videoBg += "</div>";

	
	/*
	var videoBg = "<div id='videoBg'>";
	videoBg += "<object width='100%' height='100%' type='application/x-shockwave-flash' data='"+swf+"' wmode='transparent'>";
	videoBg += "<param name='wmode' value='transparent' />";
	videoBg += "<param name='movie' value='"+swf+"' />";
	videoBg += "<param name='flashvars' value='file="+videoFlv+"' />";
	videoBg += "<img src='"+imgSrc+"' class='bg'  />";
	videoBg += "</object>";
	videoBg += "</div>";
	*/
	

	
	$("#homepage-slider .bg").replaceWith(videoBg);
	
	
}


//////////////////////////////////////////////////////////////////////////////////////////




	
function showLogin(){
	clearTimeout(t_login);
	ajaxCart.collapse();
	$("#lomi_login_pannel").css("display","block");
	/*
	$("#lomi_login_pannel").slideDown(100,function(){
		
	});*/
}

function hideLogin(){
	clearTimeout(t_login);
	$("#lomi_login_pannel").css("display","none");
	/*$("#lomi_login_pannel").slideUp(100,function(){
		
	});*/
}


function checkContactForm(){
	if($("#lomi_contact_form").length > 0){
	
		var mail_html = "<div id='lomi_contact_form_container'>";
		mail_html += "<h4>FORMULAIRE DE CONTACT</h4>";
		mail_html += "<form action='' id='lomi_contact_form_form'>";
		mail_html += "<div class='line'><label>Nom</label><input type='text' name='name' class='saisie' /></div>";
		mail_html += "<div class='line'><label>Email</label><input type='text' name='email' class='saisie' /></div>";
		//mail_html += "<div class='line'><label>Sujet</label><input type='text' name='subject' class='saisie' /></div>";
		
		mail_html += "<div class='line'><label>Objet</label><select name='subject' class='saisie'><option value=''>-- choisissez --</option><option value='coffee-shop'>Coffee shop</option><option value='eshop'>Eshop</option><option value='evenements'>Evènements</option><option value='professionnel'>Professionnel</option></select></div>";
		
		mail_html += "<div class='line'><label>Message</label><textarea name='message' class='saisie' /></textarea>";
		mail_html += "<input type='submit' name='submit' class='submit' />";
		mail_html += "<a class='btnSend' href='#send'>envoyer</a>";
		mail_html += "</form>";
		
		
		mail_html += "<div class='clear'></div>";
		mail_html += "</div>";
		mail_html += "<div class='sendConfirm'>Votre message a bien été envoyé.<br>L'équipe du Café Lomi vous répondra dans les plus brefs délais.</div>";
	
		
		$("#lomi_contact_form").html(mail_html);
		
		/////////////////////////////////////////////////
		//
		
		$("#lomi_contact_form .saisie").focus(function(e) {
            $(this).closest(".line").removeClass("error");
        });
		
		$("#lomi_contact_form_form").submit(function(e) {
            //isMail
			var error = false;
			$("#lomi_contact_form .line").removeClass("error");
		
			var datas = {};
			datas.action = "contactForm";
	
			datas.name 		= $("#lomi_contact_form .saisie[name='name']").val();
			datas.email 	= $("#lomi_contact_form .saisie[name='email']").val();
			datas.subject 	= $("#lomi_contact_form .saisie[name='subject']").val();
			datas.message	= $("#lomi_contact_form textarea[name='message']").val();
			
			if(datas.name == ""){
				$("#lomi_contact_form .saisie[name='name']").closest(".line").addClass("error");
				error = true;
			}
				
				
			if(!isMail(datas.email)){
				$("#lomi_contact_form .saisie[name='email']").closest(".line").addClass("error");
				error = true;				
			}
			if(datas.subject == ""){
				$("#lomi_contact_form .saisie[name='subject']").closest(".line").addClass("error");
				error = true;				
			}
			if(datas.message == ""){
				$("#lomi_contact_form textarea[name='message']").closest(".line").addClass("error");
				error = true;
			}
			
			if(error){
				alert("Veuillez remplir tous les champs du formulaire");
				return false;	
			}
			
			$("#lomi_contact_form_form").css("opacity",0.2);
			
			$.ajax({
			  url: $_SITE_ROOT + "lomi_actions.php",
			  dataType: 'json',
			  data: datas,
			  type: 'POST',
			  success: function(datas){
				  $("#lomi_contact_form_form").css("display","none");
				  $("#lomi_contact_form .sendConfirm").addClass("visible");
			  },
			  error: function(error){
				  alert("sending error...");
				  $("#lomi_contact_form_form").css("opacity",1);
			  }
			});
			
			return false;
        });
		
		$("#lomi_contact_form .btnSend").click(function(e) {
            $("#lomi_contact_form_form").submit();
			return false;
        });
		
	}	
}


$(document).ready(function(){

	if(isMobileOrTablet) $('body').addClass("isTablet").addClass("isMobile");
	if(isMobile) $('body').addClass("isMobile");
	

	var tmp = $("link[rel='icon']").attr('href');
	$_SITE_ROOT = tmp.split("img/")[0];
	
	
	
	//<link rel="icon" type="image/vnd.microsoft.icon" href="/cafe-lomi/prestashop/img/favicon.ico?1430932627" />
	
	

	checkSize();
	$(window).load(function() {
		  checkSize();
	});
	
	
	//////////////////////////////////////
	$("#lomi_top_menu .btnClose").click(lomi_close_menu);
	$("#lomi_top_menu_btnOpen").click(lomi_open_menu);
	
	
	///////////////////////////////////////////////
	// repositionnement des éléments
	
	$("#header").append($("#lomi_login_icon"));
	$("#header").append($("#lomi_login_pannel"));
	
	
	$(".halfBloc").each(function(index, element) {
        var t = $(this).find(".txt");
		t.html("<div class='verticalAlignPadding' rel='padding'>"+t.html()+"</div>");
    });

	
	
	
	
	
	
	//body.category-26 #lomi_video_gallery
	//content_scene_cat
	if($("body").hasClass("category-26")){
		$(".content_scene_cat").after($("#lomi_video_gallery"));
		
	}
	
	//déplacement de la description si besoin
	if($("body#product").length > 0){
		if($(".lomi_features_list .feature_name").length == 0){
			var desc = $(".lomi_product_detail_description").html();
			$(".lomi_product_detail_description").html("");
			$(".lomi_description_alt").html(desc);
			//lomi_description_alt
			
		}
	}
	
	
	///////////////////////////////////////////////
	// TEMP !!!!!!!
	
	//window.location.origin
	

	if(page_href.indexOf("cafelomi.com") > -1){
		$("img").each(function(index, element) {
			var src = $(this).attr("src");
			if(src.indexOf("v2015") > -1){
				src = src.split("/v2015/");
				src = src.join("/");
				$(this).attr("src",src);
			}
		});
		
		$(".visuel").each(function(index, element) {
			var style = $(this).attr("style");
			if(style.indexOf("v2015") > -1){
				style = style.split("/v2015/");
				style = style.join("/");
				$(this).attr("style",style);
			}
		});
		
		$("a").each(function(index, element) {
			var href = $(this).attr("href");
			if(href && href.indexOf("v2015") > -1){
				href = href.split("/v2015/");
				href = href.join("/");
				$(this).attr("href",href);
			}
			/*
			if(href.charAt(0) == "/"){
				href = "/v2015" + href;
			}
			if(href.indexOf("127.0.0.1")){
				href = href.split("http://127.0.0.1/cafe-lomi/prestashop/");
				href = href.join("/v2015/");
			}
			$(this).attr("href",href);
			*/
		});
		
		
		
	}
	
	if(page_href.indexOf("v2015") > -1){
	
	
		$("img").each(function(index, element) {
			var src = $(this).attr("src");
			if(src.indexOf("127.0.0.1")){
				src = src.split("http://127.0.0.1/cafe-lomi/prestashop/");
				src = src.join("/v2015/");
				$(this).attr("src",src);
			}
		});
		
		$(".visuel").each(function(index, element) {
			var style = $(this).attr("style");
			style = style.split("http://127.0.0.1/cafe-lomi/prestashop/");
			style = style.join("/v2015/");
			$(this).attr("style",style);
		});
		
		
		$("a").each(function(index, element) {
			var href = $(this).attr("href");
			if(href.charAt(0) == "/"){
				href = "/v2015" + href;
			}
			if(href.indexOf("127.0.0.1")){
				href = href.split("http://127.0.0.1/cafe-lomi/prestashop/");
				href = href.join("/v2015/");
			}
			$(this).attr("href",href);
		});
	
	}
	
	
	if(page_href.indexOf("127.0.0.1") > -1){
		$("a").each(function(index, element) {
			var href = $(this).attr("href");
			if(href.charAt(0) == "/"){
				href = "http://127.0.0.1/cafe-lomi/prestashop" + href;
			}
			$(this).attr("href",href);
		});
		
		
		$("img").each(function(index, element) {
			var src = $(this).attr("src");
			if(src.indexOf("cafelomi.com")){
				src = src.split("http://cafelomi.com/v2015/");
				src = src.join("http://127.0.0.1/cafe-lomi/prestashop/");
				$(this).attr("src",src);
			}
		});
		
	}

	
	
	///////////////////////////////////////////////
	// maj classes
	
	if($("body").hasClass("category-12") || 
	$("body").hasClass("category-28") || 
	$("body").hasClass("category-29")){
		$("body").addClass("smallProductList");
		
	}
	
	if($("#cart_title").length > 0 || $("#order").length > 0 ){
		$("body").addClass("lomi_commande_steps");
		
		$(".breadcrumb").html("<span>"+$(".breadcrumb").text()+"</span>");
	}
	
	if($("#create-account_form").length > 0 || $("#form_forgotpassword").length > 0 || $("#authentication").length > 0 ||   $("#identity").length > 0 ){
		$("body").addClass("lomi_account");
		
	}
	
	var ltpImgSrc = $(".lomi_topPage img.bg").attr("src");
	$(".lomi_topPage").css("background-image","url("+ltpImgSrc+")");
	
	//////////////////////////////////////////////
	// maj liens
	
	//link_eshop
	link_eshop_value = $("#lomi_top_menu a.btnEshop").attr("href");
	
	
	$("a[href='link_eshop']").attr("href",link_eshop_value);
	
	//{link_eshop}
	
	
	///////////////////////////////////////////////
	// module connexion
	
	
	
	$("#lomi_login_pannel").mouseenter(function(e) {
        clearTimeout(t_login);
    });
	
	$("#lomi_login_pannel").mouseleave(function(e) {
        t_login = setTimeout(hideLogin,500);
    });
	
	$("#lomi_login_icon").click(function(e) {
        clearTimeout(t_login);
		var l = $("#lomi_login_pannel a.account").attr("href");
		if(!l) l = $("#lomi_login_pannel a.create_account").attr("href");
		document.location.href = l;
		
		//showLogin();
    });
	
	$("#lomi_login_icon").mouseenter(function(e) {
        if(is_mobile_format) return false;
		clearTimeout(t_login);
		showLogin();
    });
	
	$("#lomi_login_icon").mouseleave(function(e) {
        t_login = setTimeout(hideLogin,500);
    });
	
	
	
	////////////////////////////////////////////////////////////////////////////////
	
	if($(".breadcrumb a").length > 0){
		
		var aInfos = $(".breadcrumb a");
		var aHTML = "";
		if($('body').attr('id') == "product"){
			var aInfos = $(".breadcrumb a");
			var i = 0;
			aInfos.each(function(index, element) {
				if(i > 0) aHTML += " <span class='navigation-pipe'>></span> ";
                aHTML += "<a class='lomi_cat_parent_link' href='"+$(this).attr("href")+"' >"+$(this).text()+"</a>";
				i++;
            });
		}else{
			aHTML = "<a class='lomi_cat_parent_link' href='"+aInfos.attr("href")+"' >"+aInfos.text()+"</a>";
			
			
		}
		
		$(".breadcrumb").html(aHTML);
		
		/*
		var aInfos = $(".breadcrumb a");
		var aHTML = "<a class='lomi_cat_parent_link' href='"+aInfos.attr("href")+"' >"+aInfos.text()+"</a>";
		$(".breadcrumb").html(aHTML);
		*/
	}
	
	//alert($(".breadcrumb").html());
	
	//////////////////////////////////////////////////////////////////////
	// Formulaire mail
	
	checkContactForm();
	
	////////////////////////////////////////////////////////////////
	//video bg
	
	checkHomeVideo();
	
	///////////////////////////////////////////////////////////////////////////
	// MOBILE
	
	/*
	$("#layered_block_left .layered_subtitle_heading").click(function(e) {
        var lb = $(this).closest('.layered_filter');
		if(lb.hasClass("expanded")){
			lb.removeClass("expanded");
		}else{
			lb.addClass("expanded");
		}
    });
	*/
	
	
	////////////////////////////////////////////////////////////////
	// remplacements
	
	//<div class="gMap"></div>
	
	//GOOGLE MAPS
	
	var map;
	var myPlace;
	var initialize;
	
	//$(".gMap").html('TO DO : CODE GOOGLE MAPS !');
	
	initialize = function(){
		
		if($('#gMap').length == 0) return false;

		
		if(!google){
			$('#gMap').html("abscence de connexion internet");
			return false;
		}

		myPlace = new google.maps.LatLng('48.890336', '2.355218');
		//48.890336,2.355218


		var styles = [
		  {
		  stylers: [
			{ saturation: -100 }
		  ]
		  },{
			featureType: "road",
			elementType: "geometry",
			stylers: [
			  { lightness: 100 },
			  { visibility: "simplified" }
			]
		  },{
		  featureType: "road",
			elementType: "labels",
			stylers: [
			  { visibility: "off" }
			]
		  }
		];
	
		var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
		
		/*
		var icon = {
		  url: '<?php echo $GLOBALS['siteRoot']; ?>_img/gmap-logo.min.svg',
		  iconsize: [16, 26],
		  iconanchor: [12, 46]
		};
		*/
		
		var marker = new google.maps.Marker({
		  position: myPlace
		});
		
		var mapOptions = {
		  zoom: 16,
		  center: myPlace,
		  disableDefaultUI: true,
		  //scrollwheel: false,
		  mapTypeControlOptions: {
			mapTypeId: [google.maps.MapTypeId.ROADMAP, 'map_style']
		  }
		};
		
		map = new google.maps.Map($('#gMap')[0],mapOptions);
		
		
		
		map.mapTypes.set('map_style', styledMap);
    	map.setMapTypeId('map_style');
		
		marker.setMap(map);
		
		
		map.setCenter(myPlace);
		
		
		$(document).bind('SIZE_CHANGED', function() {
		  map.setCenter(myPlace);
		});


	};
	 
	initialize();
	
	
	
	
	
	///////////////////////////////////////////////////////////
	
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('require', 'displayfeatures');
	
  ga('create', 'UA-64237550-1', 'auto');
  ga('require', 'linkid', 'linkid.js');
  ga('send', 'pageview');
	
	
	
});

function highdpiInit()
{
	
}


// Used to compensante Chrome/Safari bug (they don't care about scroll bar for width)
function scrollCompensate()
{
    
}

function responsiveResize()
{
	
}

function blockHover(status)
{

}

function quick_view()
{
	
}

function bindGrid()
{
	
}

function display(view)
{
	
}

function dropDown()
{

}

function accordionFooter(status)
{

}

function accordion(status)
{
	
}
