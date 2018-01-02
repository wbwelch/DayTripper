// JavaScript Document

var zipcode = "";

function localMovieSearch() { 
	var queryURL = "http://data.tmsapi.com/v1.1/movies/showings?startDate=" + "2018-01-01" + "&zip=" + "75206" + "&api_key=guyv9by6h494tz4s9xfvpqrq";
	
	

  		$.ajax({
			url: queryURL,
        	method: "GET"
      		}).done(function(response) {
		  		console.log(response);
			
			for (var i = 0; i < response.length; i++) {
				var movieName = response[i].title;
				var runtime = response[i].runtime;
				//var moviePoster = response[i].preferredimage.uri;
				var rating = response[i].ratings[0].code;
				
				
				var nowPlayingDiv = $("<div class = 'dynCard'>");
				
				var pOne = $("<p>").html("<h2 class='wordBreak'>" + movieName + "</h2>");
				nowPlayingDiv.append(pOne);
				//var pTwo = $("<img class='movieImage'>").attr("src", moviePoster);
				//nowPlayingDiv.append(pTwo);
				var pThree = $("<p>").html("<h2 class='wordBreak'>" + runtime + "</h2>");
				nowPlayingDiv.append(pThree);
				var pFour = $("<p>").html("<h2 class='wordBreak'>" + rating + "</h2>");
				nowPlayingDiv.append(pFour);
				
				
				for (var s = 0; s < 10; s++) {
					var theater = response[i].showtimes[s].theatre.name;
						console.log(theater);
					var showtimes = response[i].showtimes[s].dateTime;
						console.log(showtimes);
				}
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
    localMovieSearch();
	zipcode = $("#movieZipInput").val().trim();
});
		  
//title
//runtime
//preferredimage
//ratings
//showtimes - array - dateTime and theatre.name
