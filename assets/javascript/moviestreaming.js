// JavaScript Document
$( document ).ready(function(){

	var showSearchInput = "";
	var showType = "";
	var movieID = "";
	var streamShowType = "";

	function showStreamSearch() {

		var queryURL = "http://api-public.guidebox.com/v2/search?api_key=1c94ca8b2662e97be6c424070e65bb62ea577bf4&type=" + showType + "&field=title&query=" + showSearchInput;
		//Show or movie ID# ajax
		  $.ajax({
			url: queryURL,
			method: "GET"
		  }).done(function(response) {
			  console.log(response);
			  //error message
			  if (response.results.length == 0) {
							$("#showOutput").append("<h2>Please check show or movie spelling and button selection.</h2>");
						};
			  //response loop to grab movie id
			  for (var i = 0; i < 1 ; i++) {
				movieID = response.results[0].id;
			  };

				var streamQueryURL = "http://api-public.guidebox.com/v2/" + streamShowType + "/" + movieID + "?api_key=1c94ca8b2662e97be6c424070e65bb62ea577bf4&limit=10";
				//stream search ajax
					$.ajax({
						url: streamQueryURL,
						method: "GET"
					  }).done(function(newResponse) {
						console.log(newResponse);
						//variable definitions
						var showTitle = newResponse.title;
						var rating = newResponse.rating;
						var movieImage = newResponse.poster_120x171;
						var showImage = newResponse.artwork_208x117;
						var overview = newResponse.overview;
						var stream = "";
						var purchase = "";
						var purchaseTV = newResponse.tv_com;
						//main div
						var streamDiv = $("<div class = 'dynCard full'>");
						
						//movie or show name
						var pOne = $("<div>").html("<h1 class='wordBreak'>" + showTitle + "</h1>");
						
						streamDiv.append(pOne);
						//movie or show rating
						var pTwo = $("<p style='color:white' class='wordBreak'>").html("<strong>" + "Rated: " + rating + "</strong>");
						streamDiv.append(pTwo);
						
						//movie and show image conditional
						if (streamShowType == 'movies') {
							var pThree = $("<img>").attr("src", movieImage);
							pThree.attr("alt", showSearchInput + " poster")
							streamDiv.append(pThree);
						} else {
							var pThree = $("<img>").attr("src", showImage);
							pThree.attr("alt", showSearchInput + " poster")
							streamDiv.append(pThree);
						}
						
						//movie or show overview
						var pFour = $("<p class='wordBreak'>").html("<em style='color:white;'>" + overview + "</em>");
						streamDiv.append(pFour);
						
						//TV and movie conditional: if free movie stream source exists, add buttons
						if (streamShowType == 'movies') {
							if (newResponse.free_web_sources.length > 0) {
							streamDiv.append("<h2>Free Stream Sources:</h2>")
							};
							for (var n = 0; n < newResponse.free_web_sources.length; n++) {

								var streamStore = newResponse.free_web_sources[n].display_name;
								stream = newResponse.free_web_sources[n].link;

								var pFive = $("<div>").html("<a target='_blank' href='" + stream + "'>" + "<button class='btn inline-button'>" + streamStore + "</button></a>");

								streamDiv.append(pFive);
							};
						} 
						//else tv stream source, add buttons
						else {
							if (newResponse.channels[0].live_stream.web.length > 0) {
							streamDiv.append("<h2>Where to Watch:</h2>")
							};
							for (var l = 0; l < newResponse.channels.length; l++) {
								for (var m = 0; m < newResponse.channels[l].live_stream.web.length; m++){
									var streamStore = newResponse.channels[l].live_stream.web[m].display_name;
									stream = newResponse.channels[l].live_stream.web[m].link;


									var pFive = $("<div>").append("<a target='_blank' href=" + stream + "><button class='btn inline-button'>" + streamStore + "</button></a>");
									streamDiv.append(pFive);
									};
							};
						};
						//TV and movie conditional: movie purchase to stream, add buttons
						if (streamShowType == 'movies') {
							streamDiv.append("<h2>Where to Buy:</h2>");
							for (var k = 0; k < newResponse.purchase_web_sources.length; k++) {
								var store = newResponse.purchase_web_sources[k].display_name;
								purchase = newResponse.purchase_web_sources[k].link;
								var pSix = $("<div>").html("<a target='_blank' href=" + purchase + "><button class='btn inline-button' style='margin-right: 20px; margin-left: 15px'>" + store + "</button></a>");
								streamDiv.append(pSix);
								}	
							} 
						//tv show tv.com, add more info button
						else {
							streamDiv.append("<h2>More Info:</h2>")	
							var pSix = $("<div>").html("<a target='_blank' href='" + purchaseTV + "'><button class='btn' style='margin-right: 20px; margin-left: 15px'>tv.com</button></a>");
							streamDiv.append(pSix);
						};
						//append main div
						$("#showOutput").append(streamDiv).one();

					  });
			  });
	};

	//radio button movie/tv show conditional
	function searchType () {
		if(document.getElementById('movie-button').checked) {
		  showType = "movie";
			streamShowType = "movies";
		} else if(document.getElementById('tv-button').checked) {
		  showType = "show";
			streamShowType = "shows";
		}
	};
	//on click, run function		  
	$("#movieSearch").on("click", function(event){
		event.preventDefault();
		$("#showOutput").empty();
		showSearchInput = $("#showSearch").val().trim();
		searchType();
		showStreamSearch();
	});
	//enter key to search - not needed
//	$("#showSearch").on("keyup", function(event) {
//		if (event.keyCode === 13) {
//			$("#showOutput").empty();
//			showSearchInput = $("#showSearch").val().trim();
//			searchType();
//			showStreamSearch();
//		}
//	});

});