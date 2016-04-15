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
	$("#lbl_p3").attr(p3[p[2]].title + "<br>R$" + p3[p[2]].price);



	$("#img_p1").click(function () {
		console.log("mamma just killed a man");
	});


});