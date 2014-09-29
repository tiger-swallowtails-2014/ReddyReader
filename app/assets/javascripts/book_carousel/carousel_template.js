var carouselIndicatorTemplate = "<li data-target='{{carouselSelector}}' data-slide-to='{{index}}'></li>";
var carouselSlideTemplate = "<div class='item'>" +
														"<div class='row'>" + 
														"<div class='col-md-10 col-md-offset-1'>" +
														"</div" +
														"</div>" +
														"</div>";
var carouselControlTemplate = "<a class='left carousel-control' href='{{carouselSelector}}' role='button' data-slide='prev'>" +
															"<span class='glyphicon glyphicon-chevron-left'></span>" +
															"</a>" +
															"<a class='right carousel-control' href='{{carouselSelector}}' role='button' data-slide='next'>" +
															"<span class='glyphicon glyphicon-chevron-right'></span>" +
															"</a>";