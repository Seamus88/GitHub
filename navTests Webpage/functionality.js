$(function() {
	$('#submenu').hide();
	$("#links").on("mouseover", function(){
		$("#submenu").show();
	})
	$("#links").on("mouseleave", function() {
		$("#submenu").hide();
	})

	//$("#links").on("click", function() {
	//	$("#submenu").toggle();
	//})
})