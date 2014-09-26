$(document).ready(function(){

	$('#start').click(function(event){
		$('#testarea').show();
		var start = startTimer(event);
		$(this).hide();
		$('#done').show();
		$('#done').click(function(event){
			var time = timeElapsed(event, start);
			var word_count = $('#testparagraph').html().split(" ").length;
			$('#testarea').slideUp("slow");
			$.ajax({
				url: '/speed_test_result',
				method: "post",
				data: {"time": time, "word_count": word_count}
			}).done(function(result){
				//TODO: render WPM based on algorithm in controller
				$('#resultsarea').show();
				$('#resultsarea').append("<p>You read " + result["wpm"] + " words per minute</p><p>It will take you " + (result["result"]).toFixed(2) + " hours to read this book</p>");
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
