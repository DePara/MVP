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

	/* carregando as imagens */
	$("#img_p1").attr('src', "img/" + p1[p[0]].url);	
	$("#img_p2").attr('src', "img/" + p2[p[1]].url);	
	$("#img_p3").attr('src', "img/" + p3[p[2]].url);

	/* carregando os nomes */
	$("#lbl_p1").html(p1[p[0]].title + "<br>R$" + p1[p[0]].price);	
	$("#lbl_p2").html(p2[p[1]].title + "<br>R$" + p2[p[1]].price);	
	$("#lbl_p3").html(p3[p[2]].title + "<br>R$" + p3[p[2]].price);



	$("#img_p1").click(function () {
		swal({
		  title: 'Ótima escolha!',
		  html: '<p> Temos certeza que a sua mãe vai amar esse prato, ainda mais com esse precinho camarada que a gente conseguiu para você! Deixe o seu email aqui pra gente poder fazer a sua reserva e você poder tranquilo com a sua Mãe! Se quiser deixa o seu telefone também, assim fica mais fácil pra gente falar com você!</p><br>E-mail: <input class="inp" id="inp_email"><br>Telefone: <input class="inp" id="inp_tel">',
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
	});


});