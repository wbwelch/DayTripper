// JavaScript Document

var showSearchInput = "";
var showType = "";
var movieID = "";

function showStreamSearch() {

	var queryURL = "http://api-public.guidebox.com/v2/search?api_key=1c94ca8b2662e97be6c424070e65bb62ea577bf4&type=" + showType + "&field=title&query=" + showSearchInput;

	  $.ajax({
		url: queryURL,
		method: "GET"
	  }).done(function(response) {
		  console.log(response);

		  for (var i = 0; i < 1; i++) {
			movieID = response.results[0].id;
			  console.log(movieID);
		  };
			  
			var streamQueryURL = "http://api-public.guidebox.com/v2/movies/" + movieID + "?api_key=1c94ca8b2662e97be6c424070e65bb62ea577bf4&limit=10";

				$.ajax({
					url: streamQueryURL,
					method: "GET"
				  }).done(function(newResponse) {
					  console.log(newResponse);




				  });

			  
		  });
	

	
};

function searchType () {
	if(document.getElementById('movie-button').checked) {
	  showType = "movie";
	} else if(document.getElementById('tv-button').checked) {
	  showType = "show";
	}
};
		  
$("#movieSearch").on("click", function(event){
	console.log("test");
	event.preventDefault();
	$("#showOutput").empty();
	showSearchInput = $("#showSearch").val().trim();
	searchType();
	showStreamSearch();
});

$("#showSearch").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#movieSearch").click();
    }
});
//movie, person, show