var zipCode = "";

function eventInfo(zipCode){
	var SearchTerm = $(this).attr("data-name");
	var queryURL = "http://api.amp.active.com/v2/search/?zip=" + zipCode + "&query=events&current_page=1&per_page=10&sort=distance&exclude_children=true&api_key=egddmf6egheftfuaz65m5acw"

		$.ajax({
        	method: "GET",
        	url: queryURL,             

        	   }).done(function(response) {
		  		console.log(response);

		  		for (var i = 0; i < 10; i++) {
					var eventDiv = $("<div class = 'outdoors dynCard'>");
					
		  			var event = response.results[i].assetName;
		  			var p1 = $("<h2 style='margin: 0 0 -20px 0;' class='wordBreak'>").html(event + "<hr>");
		  			eventDiv.append(p1);
					
					var market = response.results[i].market.marketName;
					var p5 = $("<h2 class='wordBreak actType'>").html("Activity Type: " + market);
					eventDiv.append(p5);

		  			var date = response.results[i].activityStartDate;					
					var myJSON = JSON.stringify(date);
					console.log(date);
		  			var p2 = $("<p style='font-style:italic; margin: 0 0 -20px 0;' class='wordBreak'>").text("Start Date: " +  myJSON.substr(1,10));
		  			eventDiv.append(p2);
					
					var endDate = response.results[i].activityEndDate;					
					var myJSONEnd = JSON.stringify(endDate);
					console.log(date);
		  			var p6 = $("<p style='font-style:italic' class='wordBreak'>").text("End Date: " +  myJSONEnd.substr(1,10));
		  			eventDiv.append(p6);


		  			var place = response.results[i].place.placeName;
					var city = response.results[i].place.cityName;
		  			var p3 = $("<p class='wordBreak'>").text("Location: " + place);
					var p7 = $("<p class='wordBreak'>").text("Location: " + city);
					if (place == " ") {
						eventDiv.append(p7);
						}
					else {
						eventDiv.append(p3);
					};

		  			var url = response.results[i].urlAdr;
		  			var p4 = $("<hr><p style='margin: 0 0 20px 0;' class='wordBreak'>").html("<a href='" + url + "'>More Information</a>");
		  			eventDiv.append(p4);
					
					$("#eventOutput").append(eventDiv);
		  			};
		  		});
		  	
	};


$("#eventSearch").on("click", function(event){
	zipCode = $("#zipInput").val().trim();
    eventInfo(zipCode);
   return false;
});

