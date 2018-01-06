$( document ).ready(function(){
  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=zWAmJaI9vzRONyWjEmmuVURr1bAxlrnT";


$.ajax({
  url: queryURL,
  method:"GET"
}).done(function(response){
  console.log(response);

  
});

});

