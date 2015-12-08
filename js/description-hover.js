var tagNames =  ["#pollarity", "#trollhunter", "#rotpot", "#youtube-game", "#this-site", "#qool-quotes"];

$(function() {
	tagNames.forEach(function(element) {
		$(element + "-description").on("click", function(event) {
			event.preventDefault();
			$(element + "-blurb").dialog({
				modal: true,
				resizable: true,
				minWidth: 600,
			});
		});		
	});
});