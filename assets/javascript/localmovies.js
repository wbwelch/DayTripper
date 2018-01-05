// JavaScript Document

var zipcode = "";


function localMovieSearch(zipcode) { 
	var queryURL = "http://data.tmsapi.com/v1.1/movies/showings?startDate=" + "2018-01-04" + "&zip=" + zipcode + "&api_key=guyv9by6h494tz4s9xfvpqrq";
	
  		$.ajax({
			url: queryURL,
        	method: "GET"
      		}).done(function(response) {
		  		console.log(response);
			
			for (var i = 0; i < 15; i++) {
				var movieName = response[i].title;
				var runtime = response[i].runTime;
				var moviePoster = response[i].preferredImage.uri;
				var rating = response[i].ratings[0].code;
				var topCast = response[i].topCast;
				var summary = response[i].shortDescription;
				
				
				var nowPlayingDiv = $("<div class = 'dynCard'>");
				
				var pOne = $("<div>").html("<h2 class='wordBreak movie-title'>" + movieName + "</h2>");
				nowPlayingDiv.append(pOne);
				var pTwo = $("<p class='wordBreak'>").html("<em style='color:white;'>" + summary + "</em>");
				nowPlayingDiv.append(pTwo);
				var pThree = $("<h2 class='wordBreak'>").html(runtime[2,3] + " hour(s) " + runtime[5,6] + " min.");
				nowPlayingDiv.append(pThree);
				var pFour = $("<p style='color:white' class='wordBreak'>").html("<strong>" + rating + "</strong>");
				nowPlayingDiv.append(pFour);
				
				for (var k = 0; k < 3; k++) {
					var pFive = $("<p class='wordBreak small'>").html(topCast[k]);
					nowPlayingDiv.append(pFive);
				};
				
				var getTicketsButton = $("<a target='_blank' href='http://www.fandango.com'><button class='btn movieTickets' style='margin-right: 20px; margin-left: 15px'>Buy Tickets</button></a>");
				getTicketsButton.attr("data-index", i);
				nowPlayingDiv.append(getTicketsButton);
			
				//append movie times to div
				//movie-title movie title div id
				//showtimes-output showtimes div id
				
				//console.log(movieName);
				//console.log(runtime);
				//console.log(moviePoster);
				//console.log(rating);
				
				$("#movieZipOutput").append(nowPlayingDiv);
				
				$("#data-index" + [i]).on("click", function(event) {
					event.preventDefault();
					$("#movie-title").empty();
					$("#showtimes-output").empty();
					var currentIndex = $(this).attr("data-index");
				});
				
			}
			});
	};


$("#movieZipSearch").on("click", function(event){
	console.log("test");
	event.preventDefault();
	$("#movieZipOutput").empty();
	zipcode = $("#movieZipInput").val().trim();
	localMovieSearch(zipcode);

});





//title
//runtime
//preferredimage
//ratings
//showtimes - array - dateTime and theatre.name
