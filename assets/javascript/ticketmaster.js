$( document ).ready(function(){
	function displayActivities (){
		 var activity = $(this).attr("data-name");
		 var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=zWAmJaI9vzRONyWjEmmuVURr1bAxlrnT";
		 console.log(queryURL);
		$.ajax({
  			url: queryURL,
  			method:'GET'
		})
		.done(function(response){
 		 $("#activity-input").empty();
 		 var results = response.data;
 		 console.log(results);
  
		});

	}

});




  


