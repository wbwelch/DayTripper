
var zipCode = "";

function eventInfo(zipCode){
	var SearchTerm = $(this).attr("data-name");
	var queryURL = "http://api.amp.active.com/v2/search/?zip=" + zipCode + "&query=events&current_page=1&per_page=10&sort=distance&exclude_children=true&api_key=db3mq5876ujs372v4fr54w78"

		$.ajax({
        	method: "GET",
        	url: queryURL,             

        	   }).done(function(response) {
		  		console.log(response);
		  		var eventDiv= $("<div class = 'outdoors dynCard'>");

		  		for (var i = 0; i < 10; i++) {
		  			var event= response.results[i].assetName;
		  			var p1= $("<p>").text(event);
		  			eventDiv.append(p1);

		  			var date= response.results[i].activityStartDate;
		  			var p2= $("<p>").text(date);
		  			eventDiv.append(p2);

		  			var place= response.results[i].place.placeName;
		  			var p3= $("<p>").text(place);
		  			eventDiv.append(p3);

		  			var url= response.results[i].urlAdr;
		  			var p4= $("<p>").text(url);
		  			eventDiv.append(p4);
		  		};

		  			$("#eventOutput").append(eventDiv);

		  		});
		  	
		  		};


$("#eventSearch").on("click", function(event){
	zipCode = $("#zipInput").val().trim();
    eventInfo(zipCode);
   return false;
});

