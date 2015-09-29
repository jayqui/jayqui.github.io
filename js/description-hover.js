$(function() {
	$("#pollarity-description").on("click", function(event) {
		event.preventDefault();
		$("#pollarity-blurb").dialog({
			modal: true,
			resizable: true,
			minWidth: 600,
		});
	});
	$("#trollhunter-description").on("click", function(event) {
		event.preventDefault();
		$("#trollhunter-blurb").dialog({
			modal: true,
			resizable: true,
			minWidth: 600,
		});
	});
	$("#rotpot-description").on("click", function(event) {
		event.preventDefault();
		$("#rotpot-blurb").dialog({
			modal: true,
			resizable: true,
			minWidth: 600,
		});
	});

});