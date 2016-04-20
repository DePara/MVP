console.log("functions3.js carregado");

$(document).ready(function() {

	$("#btn-home").click(function(){
		window.location.href = "index.html";
	});

	$("#btn-cadastro").click(function () {
		swal({
		  title: 'Cadastrar-se!',
		  html: '<p> Deixe seu E-mail pra receber novidades!</p><br>E-mail: <input class="inp" id="inp_cadastro">',
		  showCancelButton: true,
		  closeOnConfirm: false,
		  allowEscapeKey: false,
		  allowOutsideClick: false
		}).then(function(isConfirm) {
		  if (isConfirm) {
		    swal({
		    	title: 'Obrigado por Cadastrar-se!',
		    	html: 'Depara, gente feliz! 😁',
		    	type: 'success'
			})
		  }
		});
	});

});