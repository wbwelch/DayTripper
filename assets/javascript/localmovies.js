// JavaScript Document

var zipcode = "";

function localMovieSearch() { 
	var queryURL = "http://data.tmsapi.com/v1.1/movies/showings?startDate=" + "2018-01-02" + "&zip=" + zipcode + "&api_key=guyv9by6h494tz4s9xfvpqrq";
	
	

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
				
				for (var j = 0; j < 10; j++) {
					var theater = response[i].showtimes[j].theatre.name;
						console.log(theater);	
				};
				
				for (var l = 0; l < 10; l++) {
				var showtimes = response[i].showtimes[l].dateTime;
						console.log(showtimes);
				};
				
				var getShowtimesButton = $("<button class='btn' id='movieZipSearch' style='margin-right: 20px; margin-left: 15px'>Get Showtimes</button>");
				nowPlayingDiv.append(getShowtimesButton);
				
				
				//console.log(movieName);
				//console.log(runtime);
				//console.log(moviePoster);
				//console.log(rating);
				$("#movieZipOutput").append(nowPlayingDiv);
				
			}
			});
	};


$("#movieZipSearch").on("click", function(event){
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
