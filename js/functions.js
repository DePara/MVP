console.log("functions.js carregado");

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

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

	$( "#cadastro" ).click(function() {
		var email = $("#usr_email").val();
		console.log(email);
		if (isEmail(email)){
			swal(
                'Cadastro confirmado',
                'Obrigado por se cadastrar!',
                'success'
            ).then(function() {
            	window.location.href = "../envio.php&email=" + email;
            });
		} else {
			swal(
				'Erro',
		      	'E-mail inválido',
		      	'error'
		    );
		    $("#usr_email").val("");
		}
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