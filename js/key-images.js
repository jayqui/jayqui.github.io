var keyNames = ["JQ", "WEB", "PDF", "EA", "phi", "Hi"];

$(function() {
	keyNames.forEach(function(keyName) {
		$("#" + keyName + "-figure").on({
			mouseenter: function() {
			$(this).find("img").attr("src","images/keys/" + keyName + "_no_border.png")
			},
			mouseleave: function() {
			$(this).find("img").attr("src","images/keys/" + keyName + "_shadow.png")
			},
		});
	});
});