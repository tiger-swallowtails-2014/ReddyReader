var randomBookTemplate =  "{{#books}}<div class='book col-xs-3 text-center'>" +
		                      "<img src='{{image_url}}' alt='{{title}} front cover' class='img-thumbnail'>" +
		                      "<div class='row bookinfo'><p class='book_title'>{{title}}</p>" +
		                      "<p class='author'>{{author}}</p>" +
			                    "<h4>{{timeToRead}} hours</h4></div>"+
			                    "</div>{{/books}}"
