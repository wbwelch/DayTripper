// JavaScript Document

var zipcode = "";

function localMovieSearch() { 
	var queryURL = "http://data.tmsapi.com/v1.1/movies/showings?startDate=" + "2017-01-01" + "&zip=" + "75206" + "&api_key=guyv9by6h494tz4s9xfvpqrq";
	
	

  		$.ajax({
			url: queryURL,
        	method: "GET"
      		}).done(function(response) {
		  		console.log(response);
			});
	};


$("#movieZipSearch").on("click", function(event){
	event.preventDefault();
    localMovieSearch();
	zipcode = $("#movieZipInput").val().trim();
});
		  