
$(document).ready(function(){
$(".body-wrapper").hide(0,function(){
	$(".body-wrapper").show("bounce",{duration:1500,direction:"up",times:3,distance: -80});	
});
$("#news-section").hide();

$.getJSON("news_mock.json", function(news) {
	// Copiar la seccion de noticias tantas veces como 
	// articulos (menos una que ya esta presente)
	for (var i = 0; i < news.length-1; i++) {
		$("div.news-header").first().clone().appendTo("#news-section");
		$("div.news-content").first().clone().appendTo("#news-section");
	}
	var headers = $("div.news-header");
	var contents = $("div.news-content");

	// Insertar el contenido de los articulos en 
	// las secciones correspondientes
	headers.each(function(i){
		$(this).find(".articleTitle").text(news[i].title);
	});
	contents.each(function(i){
	//	$(this).find(".articleId").text(news[i].id);
		$(this).find(".articleTitle").text(news[i].title);
		$(this).find(".articleContent").text(news[i].content);
		$(this).find(".articleImage").attr("src",news[i].image);
	});

	$("#news-section").accordion({
		header: "div.news-header",
		animate: {easing: "easeOutElastic",duration:500},
		collapsible: true,
		active: false,
		heightStyle: "content"
	});
	//Vincular los eventos de "click" con la accion correspondiente
	$(".news-header").on('click',function(e){	
		var active = $("#news-section").accordion("option", "active");
		if(active===false){
			$("#bar-title")
			.hide()
			.effect("blind", { direction:'left'}, 500);	
		}
		else{
			$("#bar-title")
				.show()
				.text($(this).find(".articleTitle").text())
				.effect("bounce", { direction:'down', times:2, distance: 20 }, 500);
		}
	});

	$(".main-bar-button").on('click',function(e){
		var newsSection = $("#news-section");	
		newsSection.toggle(300,function(){
			if(newsSection.is(":hidden")){
				$("#news-section").accordion("option", "active",false);
				$("#bar-title")
				.hide()
				.text("")
				.effect("blind", { direction:'left'}, 500);
			}
			else{
				$("#bar-title")
				.show("bounce", { direction:'down', times:2, distance: 30 }, 500);
			}
		});
	});
});
});