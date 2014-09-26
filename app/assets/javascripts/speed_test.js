$(document).ready(function(){
	$('#start').click(function(event){
		$('#testarea').show();
		var start = startTimer(event);
		$(this).hide();
		$('#done').show();
		$('#done').click(function(event){
			var time = timeElapsed(event, start);
			// $.ajax({
			// 	url: speed_test_result,
			// 	data: time
			// }).done(function(){
			// 	window.alert("yeah!");
			// })

			$('#testparagraph').append("<p>Your time was: " + time/1000 + " seconds </p>");
		});
	});
});

var startTimer = function(event){
	return event.timeStamp
}

var timeElapsed = function(event, start){
	var diff = event.timeStamp - start;
	return diff;
}