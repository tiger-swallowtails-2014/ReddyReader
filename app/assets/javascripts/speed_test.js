
// $(document).ready(function(){
// 	$('#start').click(function(event){
// 		$('#testparagraph').slideDown();
// 		var start = startTimer(event);
// 		$(this).hide();
// 		$('#done').show();
// 		$('#done').click(function(event){
// 			var time = timeElapsed(event, start);
// 			var word_count = wordCount($('#testparagraph'));
// 			$('#speedtest').slideUp("slow");
// 			$.ajax({
// 				url: '/speed_test_result',
// 				method: "post",
// 				data: {"time": time, "word_count": word_count}
// 			}).done(function(result){
// 				$('#resultsarea').show();
// 				$('#resultsarea').append("<p>You read " + result["wpm"] + " words per minute</p><p>It will take you approximately " + (result["result"]).toFixed(2) + " hours to read " + result["title"] +"</p>");
// 				displayRandomBooks(result["wpm"]);
// 			})
// 		});
// 	});
// });

// var displayRandomBooks = function(wpm){
// 	$.ajax({
// 		url: '/random_book_display'
// 	}).done(function(books){
// 		$('#randombookdisplay').slideDown();
// 		for (i in books){
// 			var time_to_read = (books[i].est_word_count/wpm)/60
// 			var rand = {
// 				title: books[i].book_title,
// 				author: books[i].author,
// 				image_url: books[i].image_url,
// 				time_to_read: time_to_read.toFixed(2)
// 			};
// 			$('#randombookdisplay').append(Mustache.render(randomBookTemplate, rand))
// 		}
// 	});
// }
