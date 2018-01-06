// function gps(){
// var latitude = "";
// var longitude = "";
          
//           if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(function(position) {
//               var pos = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude,
				  
//               };
// 				longitude = position.coords.longitude;
// 				latitude = position.coords.latitude;
// 				console.log(latitude);
// 				console.log(longitude);
//           })
//     locate();
// };

// }
var zipCode = "";
function locate(zipCode){
	var SearchTerm = $(this).attr("data-name");
	var queryURL = "http://api.wunderground.com/api/79db6a03d8151c8c/geolookup/q/" + zipCode + ".json" ;

	$.ajax({
          url: queryURL,
          method: "GET",
        })
		.done(function(response) {
			console.log(response);

			var latitude = response.location.lat;
			var longitude = response.location.lon;
			console.log(latitude);
			console.log(longitude);

			$.ajax({
					method: 'GET',
					url: 'https://developers.zomato.com/api/v2.1/search?lat='+latitude+'&lon='+longitude+'&count=10',
					headers: { 'user-key': '8abc659c37b2bd36942c2a208a719dae'}
			}).done(function (response) {
				
				console.log(response);
				
				

				for (var k = 0; k<10; k++){
					
					var rDiv = $("<div class='dynCard'>");	

					var rName = response.restaurants[k].restaurant.name;
					var pOne = $("<div>").html("<h2 class='wordBreak'>" + rName + "</h2>");
					rDiv.append(pOne);

					var photo = response.restaurants[k].restaurant.thumb;
					var image = $("<img>").attr("src", photo);
					rDiv.append(image);

					var cuisine = response.restaurants[k].restaurant.cuisines;
					var pTwo = $("<p class='wordBreak'>").text(cuisine);
					rDiv.append(pTwo);

					var address = response.restaurants[k].restaurant.location.address;
					var pThree = $("<p class='wordBreak'>").text(address);
					rDiv.append(pThree);

					var menu = response.restaurants[k].restaurant.menu_url;
					var pF = $("<p class='wordBreak'>").text(menu);
					rDiv.append(pF);
					
					$("#deliveryOutput").append(rDiv);
				};


				
			});
		});
};	



$("#deliverySearch").on("click", function(event){
	zipCode = $("#zipInput").val().trim();
	$("#deliveryOutput").empty();
    locate(zipCode);
   return false;
});

