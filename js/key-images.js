var keyNames = ["JQ", "WEB", "PDF", "EA", "phi", "Hi"];

$(function() {
	keyNames.forEach(function(keyName) {
		$("#" + keyName + "-figure").on({
			mouseenter: function() {
			$(this).find("img").attr("src","images/keys/" + keyName + "_no_border.png")
			.css({
				border: "1px solid #36417D",
				borderRadius: "20px",
				transform: "scale(0.93)"
			})},
			mouseleave: function() {
			$(this).find("img").attr("src","images/keys/" + keyName + "_shadow.png")
			.css({
				border: "initial",
				borderRadius: "initial",
				transform: "initial"
			})},
		});
	});
});