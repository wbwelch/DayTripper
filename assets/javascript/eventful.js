var zipCode = "";
var year = moment().year();
var month = moment().month();
var monthName = "";
var date = moment().date();
var zipcode = "";
var formattedDate = date + "+" + monthName + "+" + year;


if (month === 0) {
	monthName = "January";
}else if (month === 1){
	monthName = "February";
}else if (month === 2) {
   monthName = "March";
}else if (month === 3) {
  monthName = "April";
}else if (month === 4) {
   monthName = "May";
}else if (month === 5) {
   monthName = "June";
}else if (month === 6) {
   monthName = "July";
}else if (month === 7) {
   monthName = "August";
}else if (month === 8) {
   monthName = "September";
}else if (month === 9) {
   monthName = "October";
}else if (month === 10) {
   monthName = "November";
}else if (month === 11) {
   monthName = "December";
};
console.log(monthName);

function eventfulInfo(){
	var SearchTerm = $(this).attr("data-name");
	var queryURL = "http://api.eventful.com/json/events/search?&q=comedy&l=" + zipCode + "&within=10&units=miles&t=" + formattedDate + "&app_key=xknQ6SvQTNHGgt7Q";

		$.ajax({
        	method: "GET",
        	url: queryURL,             

        	   }).done(function(response) {
		  		console.log(response);
				//console.log(response.events[0].event[0]);


		  		for (var i = 0; i < 9; i++) {
					console.log(response[i].events);
					//for (var k = 0; k < 9; k++) {
						var eventfulDiv= $("<div class = 'dynCard'>");

						//var eventName = response.events.event[k].title;
	//					var p1= $("<h2 class='wordBreak'>").text(eventName);
	//					eventfulDiv.append(p1);
	//	
	//		  			var date = response[i].start_time;
	//		  			var p2 = $("<p>").text(date);
	//		  			eventfulDiv.append(p2);
	//
	//		  			var venueName = response[i].venue_name;
	//		  			var p3 = $("<p>").text(venueName);
	//		  			eventfulDiv.append(p3);
	//					
	//					var address = response[i].venue_address;
	//		  			var p5 = $("<p>").text(address);
	//		  			eventfulDiv.append(p5);
	//
	//		  			var url = response[i].url;
	//		  			var p4 = $("<p>").text(url);
	//		  			eventfulDiv.append(p4);
					
					
					$("#eventfulOutput").append(eventfulDiv);
					};
		  		//};

		  			

		  		});
		  	
		  		};


$("#eventfulSearch").on("click", function(event){
	zipCode = $("#zipInput").val().trim();
	$("#eventfulOutput").empty();
    eventfulInfo();
   return false;
});
