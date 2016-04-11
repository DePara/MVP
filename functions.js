console.log("blalalb");

$(document).ready(function() {
	$("nav a").click(function(){
		var id = $(this).attr('id');
		$("#bigImage").attr('src', $(this).attr('id') + ".jpg");
		if (id == "home")
			$("h1").html("Libertarianism");
		else 
			$("h1").html($(this).html());
	});

	$("#home").click();
});