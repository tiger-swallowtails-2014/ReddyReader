$(document).ready(function(){
	$('#start').click(function(event){
		$('#testarea').show();
		var start = startTimer(event);
		$(this).hide();
		$('#done').show();
		$('#done').click(function(event){
			var time = timeElapsed(event, start);
			$('#testarea').slideUp("slow");
			$.ajax({
				url: '/speed_test_result',
				method: "post",
				data: {"time": time}
			}).done(function(result){
				//TODO: render WPM based on algorithm in controller
				$('#resultsarea').show();
				$('#resultsarea').append("<p>Your time was: " + result + " seconds </p>");
			})

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