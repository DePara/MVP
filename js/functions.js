console.log("functions.js carregado");

$(document).ready(function() {

	console.log("hello");

	$(".btn-start").click(function(){
		window.location.href = "info.html";
		console.log("cliquei no start");
	});

	$("#btn-next-1").click(function(){
		var href = "perguntas.html" + "?idade=" + $("#idade").val();
		preco = $("#preco").val();

		p_min = preco.substr(0, preco.indexOf(','));
		p_max = preco.substr(preco.indexOf(",") + 1);

		href += "&p-min=" + p_min;
		href += "&p-max=" + p_max;

		href += "&sexo=" + $('input[name=sexo]:checked', '#radioForm').val();

		window.location.href = href;
		console.log("estou em perguntas");
	});

	$("#btn-next-2").click(function(){
		// pega tudo q ja tava no get
		var url = window.location.href;
		var href = "presentes.html?" + url.substr(url.indexOf("?") + 1);
		href += "&p1=" + $("#p1").prop('selectedIndex');
		href += "&p2=" + $("#p2").prop('selectedIndex');
		href += "&p3=" + $("#p3").prop('selectedIndex');

		window.location.href = href;
		console.log("estou em presentes");
	});

	$("#preco").slider({
		tooltip: 'always'
	}); 

	/*
	$("nav a").click(function(){
		var id = $(this).attr('id');
		//$("#bigImage").attr('src', $(this).attr('id') + ".jpg");
		if (id == "home")
			$("h1").html("Libertarianism");
		else 
			$("h1").html($(this).html());
	}); */

});