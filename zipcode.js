//fuction to put html to display
function displayWeatherInfo(zipcode) {
	var zipCodeSearch = $(this).attr("data-name");
	var queryURL = "http://api.wunderground.com/api/a2bdd3389a6bb0c6/hourly/q/" + zipcode +".json";
//creating an ajax call for specific info
	$.ajax({
          url: queryURL,
          method: "GET"
          })
		.done(function(response) {
//creating a div to hold the zipcode
    	var zipDiv = $("<div class ='zipcode'>");
    	for (var i = 0; i < 10; i++){
//storing the forecast data
   		 var hour = response.hourly_forecast[i].FCTTIME.civil;
   		 var pOne = $("<p>").text("Time: " + hour);
  			zipDiv.append(pOne);

 		 var temperature = response.hourly_forecast[i].temp.english;
   		 var pTwo = $("<p>").text("Temperature: " + temperature);
  			zipDiv.append(pTwo);

		 var condition = response.hourly_forecast[i].condition;
   		 var pThree = $("<p>").text("Conditions: " + condition);
  			zipDiv.append(pThree);

		 var image = response.hourly_forecast[i].icon_url;
   		 var pFour = $("<img>").attr("src", image);
  			zipDiv.append(pFour);
}
//putting zipcode info in
   		$("#weather").append(zipDiv);
   		});
};

function clear(){
	$("#weather").empty();
	$("#map").empty();
}

//click fuction
$("#zipcodeSearch").on("click", function(event){
	var zipcode = $("#zipcodeInput").val().trim();
	clear();
	console.log(zipcode);
	displayWeatherInfo(zipcode);
	return false;
});
