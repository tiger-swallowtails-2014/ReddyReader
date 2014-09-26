$(document).ready(function(){
	$('#start').click(function(event){
		$('#testarea').show();
		var start = event.timeStamp;
		console.log(start);
		$(this).hide();
		$('#done').show();
		$('#done').click(function(event){
			var diff = event.timeStamp - start;
			$('#testparagraph').append("<p>Your time was: " + diff/1000 + " seconds </p>");
		});
	});


});

var speedTimer = function(event){

}