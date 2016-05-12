console.log("functions2.js carregado");

function GetURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam){
            return decodeURIComponent(sParameterName[1]);
        }
    }
}
/*
function appendToJSON(pergunta, resposta, email, telefone){
	clientes.push({pergunta : pergunta, resposta: resposta, email: email, telefone: telefone});
}*/

$(document).ready(function() {

	/* pegando o valor das perguntas por get */
	var p = [];
	p[0] = GetURLParameter('p1');
	p[1] = GetURLParameter('p2');
	p[2] = GetURLParameter('p3');

	var idade = GetURLParameter('idade');
	var sexo = GetURLParameter('sexo');

	var tipo;
	if (idade < 12){
		tipo = 2;
	} else if (sexo === "M"){
		tipo = 1;
	} else {
		tipo = 0;
	}

	/* carregando as imagens */
	$("#img_p1").attr('src', "img/" + p1[p[0]][tipo].url);	
	$("#img_p2").attr('src', "img/" + p2[p[1]][tipo].url);	
	$("#img_p3").attr('src', "img/" + p3[p[2]][tipo].url);

	/* carregando os nomes */
	$("#lbl_p1").html(p1[p[0]][tipo].title + "<br>R$" + p1[p[0]][tipo].price);	
	$("#lbl_p2").html(p2[p[1]][tipo].title + "<br>R$" + p2[p[1]][tipo].price);	
	$("#lbl_p3").html(p3[p[2]][tipo].title + "<br>R$" + p3[p[2]][tipo].price);

	function finalizar(id){
		var pergunta;
		if (id == 0){
			pergunta = p1;
		} else if (id == 1){
			pergunta = p2;
		} else if (id == 2){
			pergunta = p3;
		}

		swal({
		  title: 'Ótima escolha!',
		  html: "<h2>" + pergunta[p[id]][tipo].desc + "</h2>" /*+ <br>E-mail: <input class="inp" id="inp_email">'*/,
		  showCancelButton: true,
		  closeOnConfirm: false,
		  allowEscapeKey: false,
		  allowOutsideClick: false
		}).then(function(isConfirm) {
		  if (isConfirm) {

		  	/*clientes.push({pergunta : 'p1', resposta: p[0], email: $('#inp_email').val(), telefone: $('#inp_tel').val()});*/
		  	/*appendToJSON('p1', p[0], $('#inp_email').val(), $('#inp_tel').val());*/
		    swal({
		    	title: 'Obrigado por usar a DePara!',
		    	html: 'Agora é só esperar o nosso contato!<br>Depara, gente feliz! 😁',
		    	type: 'success'
			})
		  }
		});
	}


	$("#p1").click(function () {
		finalizar(0);
	});

	$("#p2").click(function () {
		finalizar(1);
	});

	$("#p3").click(function () {
		finalizar(2);
	});


});